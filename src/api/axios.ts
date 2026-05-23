import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

export const api = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	withCredentials: true,
})

api.interceptors.request.use(config => {
	const accessToken = useAuthStore.getState().accessToken

	if (accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

api.interceptors.response.use(
	response => response,

	async error => {
		const originalRequest = error.config

		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true

			try {
				const res = await axios.post(
					`${import.meta.env.VITE_API_URL}/auth/refresh`,
					null,
					{
						withCredentials: true,
					},
				)

				const newAccessToken = res.data.accessToken

				useAuthStore.getState().setAccessToken(newAccessToken)

				originalRequest.headers.Authorization = `Bearer ${newAccessToken}`

				return api(originalRequest)
			} catch (refreshError) {
				window.location.href = '/login'

				return Promise.reject(refreshError)
			}
		}

		return Promise.reject(error)
	},
)
