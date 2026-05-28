import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetUser } from '../../hooks/useChats.hook'
import { UserProfile } from './UserProfile'

export const Chat = () => {
	const { id } = useParams()
	const { user } = useGetUser(String(id))
	const [isActive, setIsActive] = useState(true)
	return (
		<div className='relative flex h-full gap-2 p-5'>
			<div className='flex-1 bg-card'>
				<button
					className='flex items-center gap-6 border-b border-white/10 p-4 w-full'
					onClick={() => setIsActive(!isActive)}
				>
					<div className=''>
						<img
							className='h-14 w-14 rounded-full object-cover'
							src={
								user?.Avatar ||
								'https://ui-avatars.com/api/?name=' + user?.Username
							}
							alt='avatar'
						/>
					</div>
					<div className='flex flex-col'>
						<span className='font-medium text-white text-2xl'>
							{user?.Username}
						</span>
						<span className='text-xs text-green-400'>Online</span>
					</div>
				</button>
				<div className=' h-full'>
					<div className=''>
						<div className='mb-3 text-3xl font-semibold text-white/90'>
							FlyGram {id}
						</div>

						<p className='max-w-sm text-sm text-white/35'>
							Select a chat to start messaging in realtime.
						</p>
					</div>
				</div>
			</div>
			<UserProfile />
		</div>
	)
}
