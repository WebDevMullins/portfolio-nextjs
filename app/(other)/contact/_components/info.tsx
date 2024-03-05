import { MailIcon, MapPinnedIcon, PhoneIcon } from 'lucide-react'

export const Info = () => {
	return (
		<section className='flex flex-col justify-center gap-4 rounded-b-3xl bg-transparent p-10 backdrop-saturate-200 md:w-[40%] md:gap-8 md:rounded-r-3xl md:rounded-bl-none'>
			<div className='flex gap-4'>
				<div className='flex flex-col'>
					<i>
						<PhoneIcon />
					</i>
				</div>
				<div className='flex flex-col'>
					<p>(512) 300-5410</p>
				</div>
			</div>
			<div className='flex gap-4'>
				<div className='flex flex-col'>
					<i>
						<MailIcon />
					</i>
				</div>
				<div className='flex flex-col'>
					<p>brandon@webdevmullins.com</p>
				</div>
			</div>
			<div className='flex gap-4'>
				<div className='flex flex-col'>
					<i>
						<MapPinnedIcon />
					</i>
				</div>
				<div className='flex flex-col'>
					<p>Fort Worth, Texas</p>
				</div>
			</div>
		</section>
	)
}

export default Info
