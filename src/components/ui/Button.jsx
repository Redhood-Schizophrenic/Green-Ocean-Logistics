export default function Button({ variant, title, icon, iconPosition = 'left', className = '', textSize = 'text-base', onClick, displayText = true, disabled }) {
	const variantClass = buttonVariants({ variant });
	const icon_Position = IconPositionRenderer({ iconPosition })
	return (
		<button
			className={
				`flex ${icon_Position} items-center justify-center gap-2 px-3 py-2 bg-primary transition-colors duration-300 font-semibold
					${className} ${variantClass} ${disabled ? 'text-gray-500 border-gray-500 bg-opacity/50 cursor-not-allowed' : 'cursor-pointer'}
				`
			}
			onClick={onClick}
			disabled={disabled}
		>
			{icon && icon}
			{displayText && <p className={textSize}>{title}</p>}
		</button>
	)
}

const buttonVariants = ({ variant }) => {
	switch (variant) {
		case 'destructive':
			return 'bg-red-700/70 text-[var(--background)] hover:bg-red-700 ';
		case 'outline':
			return 'border-2 border-[var(--foreground)]';
		case 'link':
			return 'border-b-2 border-[var(--foreground)] rounded-none';
		case 'secondary':
			return 'bg-[var(--foreground)]/15 text-[var(--primary)] hover:bg-[var(--foreground)]/5';
		case 'invert':
			return 'text-[var(--primary)] bg-[var(--background)] hover:bg-[var(--background)]/90'
		case 'none':
			return ''

		default:
			return 'border-2 border-[var(--primary)] bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary)]/90'
	}
}

const IconPositionRenderer = ({ iconPosition }) => {
	switch (iconPosition) {
		case 'left':
			return 'flex-row';
		case 'right':
			return 'flex-row-reverse';
		case 'top':
			return 'flex-col';
		case 'bottom':
			return 'flex-col-reverse'
	}
}

export function ButtonCard({ variant, title, icon, iconPosition = 'left', className = '', onClick, displayText = true }) {
	const variantClass = buttonVariants({ variant });
	const icon_Position = IconPositionRenderer({ iconPosition })
	return (
		<button
			className={
				`cursor-pointer flex ${icon_Position} items-center justify-center gap-2 p-3 bg-primary transition-colors duration-300 font-semibold
					${className} ${variantClass}
				`
			}
			onClick={onClick}
		>
			{icon}
			{displayText && <p>{title}</p>}
		</button>
	)
}
