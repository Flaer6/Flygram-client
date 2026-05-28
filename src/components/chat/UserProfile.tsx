import { Pencil, X } from 'lucide-react'
import { useParams } from 'react-router-dom'

import { useGetUser } from '../../hooks/useChats.hook'

export const UserProfile = () => {
	const { id } = useParams()

	const { user } = useGetUser(String(id))

	const fullName =
		user?.FirstName || user?.LastName
			? `${user?.FirstName ?? ''} ${user?.LastName ?? ''}`
			: user?.Username

	return (
		<div className='h-full w-full max-w-105 bg-card'>
			{/* Header */}
			<div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
				<div className='flex items-center gap-4'>
					<button className='text-white/50 transition hover:text-white'>
						<X className='size-5' />
					</button>

					<div>
						<h2 className='text-lg font-semibold text-white'>User Info</h2>

						<p className='text-xs text-white/35'>Profile details</p>
					</div>
				</div>

				<button className='rounded-xl border border-white/10 bg-white/5 p-2 text-white/50 transition hover:border-white/20 hover:bg-white/10 hover:text-white'>
					<Pencil className='size-4' />
				</button>
			</div>

			{/* Profile */}
			<div className='relative overflow-hidden border-b border-white/10 px-6 py-10'>
				{/* Glow */}
				<div className='absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]' />

				<div className='relative z-10 flex flex-col items-center'>
					<div className='relative'>
						<img
							className='h-32 w-32 rounded-full border-4 border-white/10 object-cover shadow-2xl'
							src={
								user?.Avatar ||
								`https://ui-avatars.com/api/?name=${user?.Username}`
							}
							alt='User Avatar'
						/>

						<div className='absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-[#1f1d2b] bg-emerald-400 shadow-[0_0_15px_rgba(74,222,128,0.9)]' />
					</div>

					<div className='mt-6 text-center'>
						<h3 className='text-2xl font-semibold text-white'>{fullName}</h3>

						<p className='mt-1 text-sm text-white/40'>@{user?.Username}</p>
					</div>
				</div>
			</div>

			{/* Info Sections */}
			<div className='space-y-6 p-5'>
				<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl'>
					<p className='mb-2 text-xs uppercase tracking-wider text-white/30'>
						Username
					</p>

					<p className='text-sm text-white/85'>@{user?.Username}</p>
				</div>

				<div className='rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl'>
					<p className='mb-2 text-xs uppercase tracking-wider text-white/30'>
						About
					</p>

					<p className='text-sm leading-relaxed text-white/60'>
						This user has not added a bio yet.
					</p>
				</div>
			</div>
		</div>
	)
}
