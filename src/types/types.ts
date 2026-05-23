export interface IInputAuth {
	identifier: string
	email: string
	password: string
	username: string
}

export interface IErrorResponse {
	message: string[]
}

export interface IAuthResponse {
	accessToken: string
}
