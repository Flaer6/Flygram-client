import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import { useNavigate } from 'react-router-dom'
import { authService } from '../api/services/auth.service'
import { useAuthStore } from '../store/auth.store'
import type { IAuthResponse, IErrorResponse, IInputAuth } from '../types/types'

export const useAuth = () => {
	const { setAccessToken } = useAuthStore()
	const navigate = useNavigate()
	const { mutate: registerMutate } = useMutation<
		IAuthResponse,
		AxiosError<IErrorResponse>,
		IInputAuth
	>({
		mutationKey: ['register'],
		mutationFn: authService.register,
		onSuccess: data => {
			setAccessToken(data.accessToken)
			navigate('/')
		},
	})

	const { mutate: loginMutate } = useMutation<
		IAuthResponse,
		AxiosError<IErrorResponse>,
		IInputAuth
	>({
		mutationKey: ['login'],
		mutationFn: authService.login,
		onSuccess: data => {
			setAccessToken(data.accessToken)
			navigate('/')
		},
	})

	return {
		registerMutate,
		loginMutate,
	}
}
