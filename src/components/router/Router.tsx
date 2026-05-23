import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PublicRoute } from '../../utils/guard/routeGuard'
import { Layout } from '../Layout'
import { Login } from '../auth/Login'
import { Register } from '../auth/Register'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Layout />} />
				<Route element={<PublicRoute />}>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
