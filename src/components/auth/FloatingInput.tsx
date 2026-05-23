import { motion } from 'framer-motion'
import { Eye, EyeOff } from 'lucide-react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import { useState } from 'react'

type FloatingInputProps = {
	label: string
	icon?: ReactNode
} & InputHTMLAttributes<HTMLInputElement>

export const FloatingInput = ({
	label,
	icon,
	className,
	...props
}: FloatingInputProps) => {
	const isPassword = props.type === 'password'
	const [showPassword, setShowPassword] = useState(false)

	const [focused, setFocused] = useState(false)

	const active = focused || String(props.value ?? '').length > 0

	return (
		<div className='relative h-14'>
			<div
				className={`absolute left-0 top-5 z-10 transition-colors duration-300 ${
					active ? 'text-indigo-400' : 'text-white/40'
				}`}
			>
				{icon}
			</div>

			<input
				{...props}
				value={props.value ?? ''}
				onFocus={e => {
					setFocused(true)
					props.onFocus?.(e)
				}}
				onBlur={e => {
					setFocused(false)
					props.onBlur?.(e)
				}}
				className={`h-full w-full border-0 border-b border-white/10 bg-transparent pl-8 pr-10 pt-5 text-sm text-white outline-none ${className}`}
				type={isPassword && showPassword ? 'text' : props.type}
			/>

			<motion.span
				animate={{
					y: active ? -18 : 0,
					fontSize: 14,
					paddingBottom: 10,
					color: active ? 'rgb(129 140 248)' : 'rgba(255,255,255,0.4)',
				}}
				transition={{
					duration: 0.25,
					ease: 'easeInOut',
				}}
				className='pointer-events-none absolute bottom-1 left-8'
			>
				{label}
			</motion.span>

			<motion.div
				initial={{ scaleX: 0 }}
				animate={{
					scaleX: active ? 1 : 0,
				}}
				transition={{
					duration: 0.3,
					ease: 'easeInOut',
				}}
				className='absolute bottom-0 left-0 h-0.5 w-full origin-left bg-indigo-400'
			/>

			<div className='absolute right-0 top-5'>
				{isPassword && (
					<button
						type='button'
						onClick={() => setShowPassword(prev => !prev)}
						className='text-white/40 transition hover:text-white/70'
					>
						{showPassword ? (
							<EyeOff className='size-5' />
						) : (
							<Eye className='size-5' />
						)}
					</button>
				)}
			</div>
		</div>
	)
}
