import type { IAuthResponse, IInputAuth } from '../../types/types'
import { api } from '../axios'

class AuthService {
	async register(data: IInputAuth): Promise<IAuthResponse> {
		const response = await api.post('/auth/register', data)
		return response.data
	}
	async login(data: IInputAuth): Promise<IAuthResponse> {
		const response = await api.post('/auth/login', data)
		return response.data
	}
}

export const authService = new AuthService()
