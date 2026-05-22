import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '../Layout'
import { Login } from '../auth/Login'
import { Register } from '../auth/Register'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Layout />} />
				<Route path='/login' element={<Login />} />
				<Route path='/Register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	)
}
