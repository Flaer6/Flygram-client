import { Lock, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.hook'
import type { IInputAuth } from '../../types/types'
import { ButtonSubmit } from '../UI/buttons/ButtonSubmit'
import { AuthFormComponent } from './AuthFormComponent'
import { FloatingInput } from './FloatingInput'

export const Login = () => {
	const { register, handleSubmit, watch } = useForm<IInputAuth>()
	const { loginMutate, isLoginPending } = useAuth()

	const onLogin = (data: IInputAuth) => loginMutate(data)

	return (
		<AuthFormComponent
			title='С возвращением'
			desc='Войдите в свой аккаунт FlyGram'
		>
			<form className='space-y-2' onSubmit={handleSubmit(onLogin)}>
				<FloatingInput
					icon={<Mail className='size-5' />}
					label='Почта или имя пользователя'
					value={watch('identifier')}
					{...register('identifier')}
					type='text'
				/>

				<FloatingInput
					icon={<Lock className='size-5' />}
					label='Пароль'
					type='password'
					value={watch('password')}
					{...register('password')}
				/>

				<div className='text-right'>
					<button
						type='button'
						className='text-indigo-400 transition-colors hover:text-indigo-300'
					>
						Забыли пароль?
					</button>
				</div>

				<ButtonSubmit disabled={isLoginPending}>
					{isLoginPending ? 'Loading...' : 'Войти'}
				</ButtonSubmit>
			</form>

			<div className='mt-7 text-center text-sm text-white/40'>
				Нет аккаунта?
				<Link
					to='/register'
					className='font-medium text-indigo-400 transition-colors hover:text-indigo-300'
				>
					Создать аккаунт
				</Link>
			</div>
		</AuthFormComponent>
	)
}
