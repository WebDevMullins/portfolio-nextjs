'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@nextui-org/react'
import { SendIcon } from 'lucide-react'
import { ReactNode } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { sendEmail } from '@/actions/contact'
import { ContactFormSchema } from '@/lib/schema'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const options = {
	label: 'text-black/50 dark:text-white/90',
	input: [
		'bg-transparent',
		'text-black/90 dark:text-white/90',
		'placeholder:text-default-700/50 dark:placeholder:text-white/60'
	],
	innerWrapper: 'bg-transparent',
	inputWrapper: [
		'shadow-xl',
		'bg-default-200/50',
		'dark:bg-default/60',
		'backdrop-blur-md',
		'backdrop-saturate-200',
		'hover:bg-default-200/70',
		'dark:hover:bg-default/70',
		'group-data-[focused=true]:bg-default-200/50',
		'dark:group-data-[focused=true]:bg-default/60',
		'!cursor-text'
	],
	errorMessage: [
		'w-fit',
		'backdrop-blur-sm',
		'backdrop-saturate-200',
		'rounded-xl',
		'p-1',
		'text-white',
		'text-sm'
	]
}

const ContactForm = () => {
	// React Hook Form (useForm) for handling form state and validation
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset
	} = useForm({
		mode: 'onBlur',
		resolver: zodResolver(ContactFormSchema)
	})

	const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
		const result = await sendEmail(data)

		if (result?.success) {
			toast.success('Email sent!')
			reset()
			return
		}

		console.error('Email failed to send', result?.error)
		toast.error('Email failed to send')
	}
	return (
		<section className='flex p-10 md:w-[60%]'>
			<form
				// @ts-ignore
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-wrap gap-6'>
				{/* Input fields for Name, Email, Company, and Message */}
				<div className='h-[76px] w-full'>
					<Input
						{...register('name')}
						isRequired
						type='text'
						label='Name'
						labelPlacement='outside'
						placeholder='Your name'
						isInvalid={!!errors.name?.message}
						errorMessage={errors.name?.message as ReactNode}
						classNames={options}
					/>
				</div>
				<div className='h-[76px] w-full'>
					<Input
						{...register('email')}
						isRequired
						type='email'
						label='Email'
						labelPlacement='outside'
						placeholder='you@mail.com'
						isInvalid={!!errors.email?.message}
						errorMessage={errors.email?.message as ReactNode}
						classNames={options}
					/>
				</div>
				<div className='h-[76px] w-full'>
					<Input
						{...register('company')}
						isRequired
						type='text'
						label='Company'
						labelPlacement='outside'
						placeholder='Your company'
						isInvalid={!!errors.company?.message}
						errorMessage={errors.company?.message as ReactNode}
						classNames={options}
					/>
				</div>
				<div className='h-[120px] w-full'>
					<Textarea
						{...register('message')}
						isRequired
						type='text'
						label='Message'
						labelPlacement='inside'
						placeholder='Your message'
						isInvalid={!!errors.message?.message}
						errorMessage={errors.message?.message as ReactNode}
						classNames={options}
					/>
				</div>
				{/* Submit Button */}
				<Button
					type='submit'
					isLoading={isSubmitting}
					endContent={<SendIcon size={20} />}
					className='bg-red-700 font-medium'>
					Send
				</Button>
			</form>
		</section>
	)
}
export default ContactForm
