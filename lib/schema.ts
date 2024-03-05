import { z } from 'zod'

export const ContactFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().min(1, 'Email is required').email('Invalid email'),
	company: z.string().min(1, 'Company is required'),
	message: z.string().min(1, 'Message is required')
})
