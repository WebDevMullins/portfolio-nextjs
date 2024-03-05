'use server'

import { Resend } from 'resend'
import { z } from 'zod'

import { ContactFormSchema } from '@/lib/schema'

import { ContactFormEmail } from '@/components/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
	const result = ContactFormSchema.safeParse(data)

	if (result.success) {
		const { name, email, company, message } = result.data

		try {
			const data = await resend.emails.send({
				from: 'Contact Form <contactform@webdevmullins.com>',
				to: ['webdevmullins@gmail.com'],
				subject: 'Contact form submission',
				react: ContactFormEmail({ name, email, message, company }),
				text: `From: ${email} at ${company}\n\n${message}`
			})
			return { success: true, data }
		} catch (error) {
			return { success: false, error }
		}
	}

	if (result.error) {
		return { success: false, error: result.error.format() }
	}
}
