import PropTypes from 'prop-types'

import { Button, Input, Textarea } from '@nextui-org/react'
import { Mail, MapPinned, Phone, Send } from 'lucide-react'

// Defining the Form component with props
const Form = ({
	register,
	handleSubmit,
	errors,
	isSubmitting,
	onSubmit
}: {
	register: any
	handleSubmit: any
	errors: any
	isSubmitting: any
	onSubmit: any
}) => {
	// Styling options for form elements
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

	// Rendering the Form component
	return (
		<div className='flex flex-col max-w-screen-md md:flex-row gap-0 justify-center border-2 border-neutral-400 rounded-3xl'>
			<div className='flex md:w-[60%] p-8'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-wrap gap-4'>
					{/* Input fields for Name, Email, Company, and Message */}
					<Input
						{...register('name')}
						isRequired
						type='text'
						label='Name'
						labelPlacement='outside'
						placeholder='Enter your name'
						isInvalid={errors.name?.message}
						errorMessage={errors.name?.message}
						classNames={options}
					/>
					<Input
						{...register('email')}
						isRequired
						type='email'
						label='Email'
						labelPlacement='outside'
						placeholder='you@example.com'
						isInvalid={errors.email?.message}
						errorMessage={errors.email?.message}
						classNames={options}
					/>
					<Input
						{...register('company')}
						isRequired
						type='text'
						label='Company'
						labelPlacement='outside'
						placeholder='Your company'
						isInvalid={errors.company?.message}
						errorMessage={errors.company?.message}
						classNames={options}
					/>
					<Textarea
						{...register('message')}
						isRequired
						type='text'
						label='Message'
						labelPlacement='outside'
						placeholder='Enter your message'
						isInvalid={errors.message?.message}
						errorMessage={errors.message?.message}
						classNames={options}
					/>
					{/* Submit Button */}
					<Button
						onClick={handleSubmit(onSubmit)}
						isLoading={isSubmitting}
						endContent={<Send size={20} />}
						className='bg-red-700 font-medium'>
						Send
					</Button>
				</form>
			</div>
			{/* Contact Info Section */}
			<div className='bg-transparent backdrop-saturate-200 flex flex-col md:w-[40%] justify-center gap-4 md:gap-8 p-8 rounded-b-3xl md:rounded-bl-none md:rounded-r-3xl'>
				<div className='flex gap-4'>
					<div className='flex flex-col'>
						<i>
							<Phone />
						</i>
					</div>
					<div className='flex flex-col'>
						<p>(512) 300-5410</p>
					</div>
				</div>
				<div className='flex gap-4'>
					<div className='flex flex-col'>
						<i>
							<Mail />
						</i>
					</div>
					<div className='flex flex-col'>
						<p>brandon@webdevmullins.com</p>
					</div>
				</div>
				<div className='flex gap-4'>
					<div className='flex flex-col'>
						<i>
							<MapPinned />
						</i>
					</div>
					<div className='flex flex-col'>
						<p>Fort Worth, Texas</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Form
