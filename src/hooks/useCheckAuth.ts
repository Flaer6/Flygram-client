import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useAuthStore } from '../store/auth.store'

export const useCheckAuth = () => {
	const setAccessToken = useAuthStore(state => state.setAccessToken)

	return useQuery({
		queryKey: ['checkAuth'],

		queryFn: async () => {
			const res = await axios.get(
				`${import.meta.env.VITE_API_URL}/auth/refresh`,
				{
					withCredentials: true,
				},
			)

			setAccessToken(res.data.access_token)

			return res.data
		},

		retry: false,
		refetchOnWindowFocus: false,
		staleTime: Infinity,
	})
}
