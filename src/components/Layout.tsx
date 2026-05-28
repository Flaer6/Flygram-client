import { Outlet } from 'react-router-dom'
import { Aside } from './aside/Aside'

export const Layout = () => {
	// debounce

	// api search

	// default chats OR searched users

	return (
		<div className='flex h-screen overflow-hidden text-white'>
			{/* Sidebar */}

			<Aside />
			{/* Main */}
			<main className='relative flex-1 overflow-hidden'>
				<div className='absolute left-1/3 top-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]' />
				<div className='absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[120px]' />

				<Outlet />
			</main>
		</div>
	)
}
