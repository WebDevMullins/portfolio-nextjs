'use client'
import { projects } from '@/constants/projects'
import { Image, Link } from '@nextui-org/react'
import { GithubIcon } from 'lucide-react'

export default function Portfolio() {
	return (
		<>
			<section className='mt-36 flex max-w-screen-xl flex-col items-center justify-center gap-10 px-4 md:mt-44'>
				<h1 className='text-center text-3xl font-extrabold capitalize md:text-5xl'>
					Have a Look at My Work
				</h1>
			</section>
			<section className='mb-36 flex max-w-screen-xl justify-center gap-10 px-4 md:mb-44'>
				<div className='mx-auto flex max-w-lg md:max-w-full'>
					<div className='mt-20 grid gap-4 gap-y-12 md:mt-20 md:gap-y-24'>
						{projects.map((project, index) => (
							<div
								key={index}
								className='mx-auto grid gap-x-8 gap-y-8 md:grid-cols-2 md:gap-x-12 lg:gap-x-20'>
								<div
									className={
										'mx-auto max-w-4xl ' +
										(index % 2 === 0 ? 'md:order-first' : 'md:order-last')
									}>
									<Link href={project.href}>
										<Image
											alt='aiconic'
											src={project.img}
											height={700}
											width={1000}
											className='hover:scale-105'
										/>
									</Link>
								</div>
								<div className='mx-auto flex w-full flex-col justify-center  gap-6 rounded-xl px-4'>
									<h2 className='text-2xl font-bold'>{project.title}</h2>
									<p className='text-base'>{project.desc}</p>
									<div className='flex flex-col justify-center gap-6'>
										<div
											key={index}
											className='text-xs font-semibold'>
											{project.skills}
										</div>
										<Link href={project.github}>
											<GithubIcon className='text-white' />
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
