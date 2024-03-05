import { Image, Link } from '@nextui-org/react'

import { skills } from '@/constants/skills'

export default function Resume() {
	return (
		<section className='flex flex-col items-center justify-center max-w-screen-xl px-4 gap-10'>
			<h1 className='text-3xl md:text-5xl font-extrabold capitalize text-center'>
				Creating apps with modern technologies
			</h1>
			{/* Section for displaying skills with images */}
			<section className='flex flex-wrap max-w-screen-lg justify-center gap-10 pt-10 items-center'>
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
				href='/files/resume.pdf'
				download='Brandon Mullins Resume.pdf'
				color='foreground'
				isBlock
				size='lg'
				className='font-medium'>
				Download My Resume
			</Link>
		</section>
	)
}
