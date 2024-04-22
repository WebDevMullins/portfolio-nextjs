import { Image, Link } from '@nextui-org/react'

import { skills } from '@/constants/skills'

export default function Resume() {
	return (
		<section className='flex max-w-screen-xl flex-col items-center justify-center gap-10 px-4'>
			<h1 className='text-center text-3xl font-extrabold capitalize md:text-5xl'>
				Creating apps with modern technologies
			</h1>
			{/* Section for displaying skills with images */}
			<section className='flex max-w-screen-lg flex-wrap items-center justify-center gap-10 pt-10'>
				{/* Mapping over the skills data to display skill images */}
				{skills.map((skill, index) => (
					<Image
						key={index}
						src={`/images/skills/${skill.img}`}
						alt={skill.name}
						height={skill.height}
						width={skill.width}
						className='h-12 md:h-auto'
					/>
				))}
			</section>
			{/* Link for downloading the resume PDF */}
			<Link
				href='/files/Full-Stack_Web_Developer_Brandon_Mullins.pdf'
				download='Full-Stack_Web_Developer_Brandon_Mullins.pdf'
				color='foreground'
				isBlock
				size='lg'
				className='font-medium'>
				Download My Resume
			</Link>
		</section>
	)
}
