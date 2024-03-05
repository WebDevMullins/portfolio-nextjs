import ContactForm from './_components/contact-form'
import Info from './_components/info'

export default function ContactPage() {
	return (
		<>
			<section className='flex flex-col items-center gap-y-10'>
				<h1 className='flex text-3xl font-extrabold capitalize md:text-5xl'>
					Get in touch with me
				</h1>
				<div className='px-4'>
					<div className='flex max-w-screen-lg flex-col justify-center gap-0 rounded-3xl border-2 border-neutral-400 md:flex-row'>
						<ContactForm />
						<Info />
					</div>
				</div>
			</section>
		</>
	)
}
