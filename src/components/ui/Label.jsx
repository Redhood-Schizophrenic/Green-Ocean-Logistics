export default function Label({ title, ariaLabel = '', }) {
	return (
		<label className="font-semibold" aria-label={ariaLabel}>{title}</label>
	)
}

