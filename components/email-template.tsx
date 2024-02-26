import * as React from 'react'

interface EmailTemplateProps {
	name: string
	email: string
	message: string
	company: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	message,
	company
}) => (
	<div>
		<h1>{name}</h1>
		<p>
			From: {email} at {company}
		</p>
		<p>{message}</p>
	</div>
)
