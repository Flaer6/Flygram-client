import { ArrowLeft, Menu, Search } from 'lucide-react'
import { useState } from 'react'
import { useDebounce } from 'use-debounce'

import { NavLink } from 'react-router-dom'
import { data } from '../../data'
import { useSearchUsers } from '../../hooks/useChats.hook'
import type { IUser } from '../../types/types'
export const Aside = () => {
	const [search, setSearch] = useState('')
	const [query] = useDebounce(search, 400)
	const { chats = [] } = useSearchUsers(query)
	const [isSearchOpen, setIsSearchOpen] = useState(false)

	const renderData = query.trim().length > 0 ? chats : data

	return (
		<aside className='relative flex h-full w-105 shrink-0 flex-col border-r border-white/10 bg-white/3 backdrop-blur-3xl'>
			{/* Glow */}
			<div className='absolute inset-0 bg-linear-to-b from-indigo-500/10 via-transparent to-transparent' />

			<div className='relative z-10 flex h-full flex-col'>
				{/* Header */}
				<div className='border-b border-white/10 px-4 py-4'>
					<div
						className={`flex items-center gap-3 rounded-2xl border border-white/10 bg-white/4 px-4 py-3 transition-all duration-300 ${
							isSearchOpen ? 'border-indigo-400/30 bg-white/6' : ''
						}`}
					>
						<button
							onClick={() => {
								if (isSearchOpen) {
									setSearch('')
									setIsSearchOpen(false)
								} else {
									setIsSearchOpen(true)
								}
							}}
							className='shrink-0 text-white/60 transition hover:text-white'
						>
							{isSearchOpen ? (
								<ArrowLeft className='size-5' />
							) : (
								<Menu className='size-5' />
							)}
						</button>

						<div className='relative flex-1'>
							{!isSearchOpen && (
								<Search className='pointer-events-none absolute left-0 top-1/2 size-4 -translate-y-1/2 text-white/30' />
							)}

							<input
								type='text'
								onFocus={() => setIsSearchOpen(true)}
								value={search}
								onChange={e => setSearch(e.target.value)}
								placeholder='Search'
								className={`w-full bg-transparent text-sm outline-none placeholder:text-white/30 ${
									!isSearchOpen ? 'pl-6' : ''
								}`}
							/>
						</div>
					</div>
				</div>

				{/* Label */}
				{isSearchOpen && (
					<div className='px-5 py-3 text-xs font-medium uppercase tracking-wider text-white/30'>
						{query.trim().length > 0 ? 'Search Result' : 'Chats'}
					</div>
				)}

				{/* Chats */}
				<div className='flex-1 space-y-2 overflow-y-auto px-3 pb-3'>
					{renderData?.length ? (
						renderData.map((item: IUser) => (
							<NavLink
								to={`${item.ID}`}
								key={item.ID}
								className='group flex w-full items-center gap-4 rounded-3xl border border-transparent p-3 text-left transition-all hover:border-white/10 hover:bg-white/4'
							>
								{/* Avatar */}
								<div className='relative shrink-0'>
									<img
										className='max-h-14 max-w-14 rounded-full object-cover'
										src={
											item.Avatar ||
											'https://ui-avatars.com/api/?name=' + item.Username
										}
										alt={item.Username}
									/>

									<div className='absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-[#1f1d2b] bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]' />
								</div>

								{/* Info */}
								<div className='min-w-0 flex-1'>
									<div className='flex items-center justify-between gap-3'>
										<h3 className='truncate font-medium text-white'>
											{item.Username}
										</h3>

										<span className='text-xs text-white/30'>12:45</span>
									</div>

									<p className='truncate text-sm text-white/45'>
										{'Start chatting'}
									</p>
								</div>
							</NavLink>
						))
					) : (
						<div className='flex h-32 items-center justify-center text-sm text-white/30'>
							Nothing found
						</div>
					)}
				</div>
			</div>
		</aside>
	)
}
