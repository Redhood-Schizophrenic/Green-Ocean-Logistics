export default function Label({ title, ariaLabel = '', }) {
	return (
		<label className="text-lg" aria-label={ariaLabel}>{title}</label>
	)
}

