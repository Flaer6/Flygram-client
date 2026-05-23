import type { ReactNode } from 'react'

interface IProps {
	title: string
	desc: string
	children: ReactNode
}

export const AuthFormComponent = ({ title, desc, children }: IProps) => {
	return (
		<div className='flex min-h-screen items-center justify-center overflow-hidden bg-[#1f1d2b] p-4'>
			<div className='absolute inset-0 ' />

			<div className='relative w-full max-w-md overflow-hidden '>
				<div className='mb-10 flex flex-col items-center'>
					<div className='mb-2 flex max-h-50 max-w-50 items-center justify-center  '>
						<img
							src='/favicons/512x512.png'
							alt='FlyGram'
							className=' object-contain rounded-[28px]'
						/>
					</div>

					<h1 className='text-3xl font-bold tracking-tight text-white'>
						{title}
					</h1>

					<p className='mt-2 text-center text-sm text-white/50'>{desc}</p>
				</div>
				{children}
			</div>
		</div>
	)
}
