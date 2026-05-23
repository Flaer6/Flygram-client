import cn from 'clsx'

export const ButtonSubmit = ({
	children,
	className,
	...rest
}: {
	children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			type='submit'
			className={cn(
				className,
				'group relative mt-4 flex h-14 w-full items-center justify-center overflow-hidden rounded-2xl bg-indigo-500 font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-indigo-400 active:scale-[0.98]',
			)}
			{...rest}
		>
			<span className='relative z-10'>{children}</span>
		</button>
	)
}
