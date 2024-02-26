import { EmailTemplate } from '../../../components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(name: string, email: string, message: string, company: string) {
	try {
		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['delivered@resend.dev'],
			subject: 'Hello world',
			// react: EmailTemplate({ name, email, message, company }),
			text: `From: ${email} at ${company}\n\n${message}`
		})
		console.log(data)

		return Response.json(data)
	} catch (error) {
		return Response.json({ error })
	}
}
