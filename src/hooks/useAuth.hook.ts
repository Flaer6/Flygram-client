import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { authService } from '../api/services/auth.service'
import { useAuthStore } from '../store/auth.store'

import type { IAuthResponse, IErrorResponse, IInputAuth } from '../types/types'

export const useAuth = () => {
	const { setAccessToken } = useAuthStore()
	const navigate = useNavigate()

	const getErrorMessage = (
		error: AxiosError<IErrorResponse>,
		fallback: string,
	) => {
		const message = error.response?.data?.message

		if (Array.isArray(message)) {
			return message[0]
		}

		if (typeof message === 'string') {
			return message
		}

		return fallback
	}

	const { mutate: registerMutate, isPending: isRegisterPending } = useMutation<
		IAuthResponse,
		AxiosError<IErrorResponse>,
		IInputAuth
	>({
		mutationKey: ['register'],
		mutationFn: authService.register,

		onSuccess: data => {
			setAccessToken(data.accessToken)

			toast.success('Account created')

			navigate('/')
		},

		onError: error => {
			toast.error(getErrorMessage(error, 'Registration failed'))
		},
	})

	const { mutate: loginMutate, isPending: isLoginPending } = useMutation<
		IAuthResponse,
		AxiosError<IErrorResponse>,
		IInputAuth
	>({
		mutationKey: ['login'],
		mutationFn: authService.login,

		onSuccess: data => {
			setAccessToken(data.accessToken)

			toast.success('Welcome back')

			navigate('/')
		},

		onError: error => {
			toast.error(getErrorMessage(error, 'Login failed'))
		},
	})

	return {
		registerMutate,
		loginMutate,

		isRegisterPending,
		isLoginPending,
	}
}
