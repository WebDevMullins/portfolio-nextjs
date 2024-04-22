interface ContactFormEmailProps {
	name: string
	email: string
	message: string
	company?: string | null
}

export const ContactFormEmail: React.FC<Readonly<ContactFormEmailProps>> = ({
	name,
	email,
	message,
	company
}) => (
	<div>
		<h1>Contact form submission</h1>
		<p>
			From <strong>{name}</strong> at {email}
		</p>
		{company && (
			<>
				<h2>Company:</h2>
				<p>{company}</p>
			</>
		)}
		<h3>Message:</h3>
		<p>{message}</p>
	</div>
)
