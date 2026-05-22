import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { useState } from 'react'

export const Register = () => {
	const [showPassword, setShowPassword] = useState(false)

	return (
		<div className='flex min-h-screen items-center justify-center overflow-hidden bg-[#1f1d2b] p-4'>
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_40%)]' />

			<div className='relative w-full max-w-md overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-2xl'>
				<div className='mb-8 flex flex-col items-center'>
					<div className='mb-5 flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/10 bg-white/[0.04]'>
						<img
							src='/favicons/512x512.png'
							alt='FlyGram'
							className='h-16 w-16 object-contain'
						/>
					</div>

					<h1 className='text-3xl font-bold tracking-tight text-white'>
						Создать аккаунт
					</h1>

					<p className='mt-2 text-center text-sm text-white/50'>
						Добро пожаловать в FlyGram
					</p>
				</div>

				<form className='space-y-4'>
					<div>
						<label className='mb-2 block text-sm font-medium text-white/70'>
							Username
						</label>

						<div className='group flex h-14 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all focus-within:border-indigo-500/50 focus-within:bg-white/[0.05]'>
							<User className='mr-3 size-5 text-white/40 transition-colors group-focus-within:text-indigo-400' />

							<input
								type='text'
								placeholder='Введите username'
								className='h-full w-full bg-transparent text-white outline-none placeholder:text-white/30'
							/>
						</div>
					</div>

					<div>
						<label className='mb-2 block text-sm font-medium text-white/70'>
							Email
						</label>

						<div className='group flex h-14 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all focus-within:border-indigo-500/50 focus-within:bg-white/[0.05]'>
							<Mail className='mr-3 size-5 text-white/40 transition-colors group-focus-within:text-indigo-400' />

							<input
								type='email'
								placeholder='Введите email'
								className='h-full w-full bg-transparent text-white outline-none placeholder:text-white/30'
							/>
						</div>
					</div>

					<div>
						<label className='mb-2 block text-sm font-medium text-white/70'>
							Пароль
						</label>

						<div className='group flex h-14 items-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 transition-all focus-within:border-indigo-500/50 focus-within:bg-white/[0.05]'>
							<Lock className='mr-3 size-5 text-white/40 transition-colors group-focus-within:text-indigo-400' />

							<input
								type={showPassword ? 'text' : 'password'}
								placeholder='Введите пароль'
								className='h-full w-full bg-transparent text-white outline-none placeholder:text-white/30'
							/>

							<button
								type='button'
								onClick={() => setShowPassword(prev => !prev)}
								className='text-white/40 transition-colors hover:text-white/70'
							>
								{showPassword ? (
									<EyeOff className='size-5' />
								) : (
									<Eye className='size-5' />
								)}
							</button>
						</div>
					</div>

					<button
						type='submit'
						className='flex h-14 w-full items-center justify-center rounded-2xl bg-indigo-500 font-semibold text-white transition-all hover:bg-indigo-400 active:scale-[0.98]'
					>
						Создать аккаунт
					</button>
				</form>

				<div className='mt-6 text-center text-sm text-white/40'>
					Уже есть аккаунт?{' '}
					<button className='font-medium text-indigo-400 transition-colors hover:text-indigo-300'>
						Войти
					</button>
				</div>
			</div>
		</div>
	)
}
