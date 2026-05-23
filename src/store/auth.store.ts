import { create } from 'zustand'

type AuthStore = {
	accessToken: string | null
	isAuth: boolean
	setAccessToken: (token: string | null) => void
}

export const useAuthStore = create<AuthStore>(set => ({
	accessToken: null,
	isAuth: false,
	setAccessToken: token => {
		set({
			accessToken: token,
			isAuth: !!token,
		})
	},
}))
