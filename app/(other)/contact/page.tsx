'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useDisclosure } from '@nextui-org/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { POST } from '../../api/send/route'
import Form from '../../../components/ui/Form'
import FormModal from '../../../components/ui/Modal'

// Validation schema for the contact form using Zod
const formSchema = z.object({
	name: z.string().min(4, 'Name must be at least 4 characters'),
	email: z.string().email('Invalid email address'),
	message: z.string().min(8, 'Message must be at least 8 characters'),
	company: z.string().min(3, 'Company must be at least 3 characters')
})

export default function Contact() {
	// React Hook Form (useForm) for handling form state and validation
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isSubmitSuccessful },
		reset
	} = useForm({
		mode: 'onBlur',
		resolver: zodResolver(formSchema)
	})

	// NextUI useDisclosure for handling modal visibility
	const { isOpen, onOpen, onClose } = useDisclosure()
	// State to store form data
	// const [formData, setFormData] = useState(null)

	// Form submission handler
	const [formData, setFormData] = useState<{ name: string, email: string, message: string, company: string }>({ name: '', email: '', message: '', company: '' })

	const onSubmit = async (data: { name: string, email: string, message: string, company: string }) => {
		// Simulating a delay (e.g., API request)
		// await new Promise((resolve) => setTimeout(resolve, 2000))
		// Sending the form data to the API
		await POST(data.name, data.email, data.message, data.company)
		// Logging the form data
		console.log(data)
		// Updating the form data in the state
		setFormData(data)
		// Resetting the form after submission
		reset()
		// Opening the modal if submission was successful
		onOpen() // Remove the argument from the function call
	}

	return (
		<>
			<section className='flex flex-col items-center gap-y-10'>
				<h1 className='flex text-3xl md:text-5xl font-extrabold capitalize'>
					Get in touch with me
				</h1>
				<div className='px-4'>
					<Form
						register={register}
						handleSubmit={handleSubmit}
						errors={errors}
						isSubmitting={isSubmitting}
						onSubmit={onSubmit}
					/>
				</div>
			</section>
			{/* Modal component for displaying a confirmation message */}
			<FormModal
				isOpen={isOpen}
				onClose={onClose}
				data={formData}
			/>
		</>
	)
}
