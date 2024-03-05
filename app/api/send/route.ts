import { Resend } from 'resend'
import { EmailTemplate } from '../../../components/contact-form-email'

const resend = new Resend('re_izShnf5H_6Pu1P1atn5QrPRtPpBBzbpYh')
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(
	email: string,
	name: string,
	message: string,
	company: string
) {
	try {
		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: ['webdevmullins@gmail.com'],
			subject: 'Hello world',
			// react: EmailTemplate({ name, email, message, company }),
			text: `From: ${email} at ${company}\n\n${message}`
		})
		// console.log(data)

		return Response.json(data)
	} catch (error) {
		return Response.json({ error })
	}
}
