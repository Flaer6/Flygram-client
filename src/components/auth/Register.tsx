import { Lock, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth.hook'
import type { IInputAuth } from '../../types/types'
import { ButtonSubmit } from '../UI/buttons/ButtonSubmit'
import { AuthFormComponent } from './AuthFormComponent'
import { FloatingInput } from './FloatingInput'

export const Register = () => {
	const { register, handleSubmit, watch } = useForm<IInputAuth>()
	const { registerMutate } = useAuth()

	const onRegister = (data: IInputAuth) => registerMutate(data)

	return (
		<AuthFormComponent
			title='Создать аккаунт'
			desc='Добро пожаловать в FlyGram'
		>
			<form className='space-y-3' onSubmit={handleSubmit(onRegister)}>
				<FloatingInput
					icon={<User className='size-5' />}
					label='Username'
					value={watch('username')}
					{...register('username')}
				/>

				<FloatingInput
					icon={<Mail className='size-5' />}
					label='Email'
					type='email'
					value={watch('email')}
					{...register('email')}
				/>

				<FloatingInput
					icon={<Lock className='size-5' />}
					label='Пароль'
					value={watch('password')}
					{...register('password')}
					type='password'
				/>

				<ButtonSubmit>Создать Аккаунт</ButtonSubmit>
			</form>

			<div className='mt-6 text-center text-sm text-white/40'>
				Уже есть аккаунт?
				<Link
					to='/login'
					className='font-medium text-indigo-400 transition-colors hover:text-indigo-300'
				>
					Войти
				</Link>
			</div>
		</AuthFormComponent>
	)
}
