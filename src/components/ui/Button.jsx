export default function Button({ variant, title, icon, iconPosition = 'left', className = '', onClick }) {
	const variantClass = buttonVariants({ variant });
	return (
		<button
			className={
				`cursor-pointer flex ${iconPosition === 'left' ? 'flex-row' : 'flex-row-reverse'} items-center justify-center gap-2 px-6 py-2 bg-primary transition-all duration-300 rounded-md font-semibold
					${className} ${variantClass}
				`
			}
			onClick={onClick}
		>
			{icon}
			<p>{title}</p>
		</button>
	)
}

const buttonVariants = ({ variant }) => {
	switch (variant) {
		case 'destructive':
			return 'bg-red-700/70 text-[var(--background)] hover:bg-red-700 ';
		case 'outline':
			return 'border-2 border-[var(--foreground)]';
		case 'secondary':
			return 'bg-[var(--secondary)] text-[var(--background)] hover:bg-[var(--secondary)]/90';
		case 'invert':
			return 'text-[var(--primary)] bg-[var(--background)] hover:bg-[var(--background)]/90'
		case 'none':
			return ''

		default:
			return 'bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary)]/90'
	}
}
