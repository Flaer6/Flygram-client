import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

export const useCheckAuth = () => {
	const { setAccessToken } = useAuthStore()

	return useQuery({
		queryKey: ['checkAuth'],

		queryFn: async () => {
			const res = await axios.post(
				`${import.meta.env.VITE_API_URL}/auth/refresh`,
				null,
				{
					withCredentials: true,
				},
			)

			setAccessToken(res.data.accessToken)

			return res.data
		},

		retry: false,
		refetchOnWindowFocus: false,
	})
}
