import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useCheckAuth } from '../../hooks/useCheckAuth'
import { PrivateRoute, PublicRoute } from '../../utils/guard/routeGuard'
import { Layout } from '../Layout'
import { Login } from '../auth/Login'
import { Register } from '../auth/Register'
import { Chat } from '../chat/Chat'

export const Router = () => {
	const { isLoading } = useCheckAuth()

	if (isLoading) {
		return <div>Loading...</div>
	}
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Layout />}>
						<Route path=':id' element={<Chat />} />
					</Route>
				</Route>
				<Route element={<PublicRoute />}>
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
