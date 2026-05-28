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

export interface IUser {
	ID: number
	Username: string
	Email: string
	Avatar: string
	FirstName: string
	LastName: string
}
