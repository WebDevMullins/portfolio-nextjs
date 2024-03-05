'use client'
import { projects } from '@/constants/projects'
import { Image, Link } from '@nextui-org/react'
import { GithubIcon } from 'lucide-react'

export default function Portfolio() {
	return (
		<>
			<section className='flex flex-col items-center justify-center max-w-screen-xl px-4 gap-10 mt-36 md:mt-44'>
				<h1 className='text-3xl md:text-5xl font-extrabold capitalize text-center'>
					Have a Look at My Work
				</h1>
			</section>
			<section className='flex justify-center max-w-screen-xl px-4 gap-10 mb-36 md:mb-44'>
				<div className='flex mx-auto max-w-lg md:max-w-full'>
					<div className='mt-20 gap-4 gap-y-12 grid md:mt-20 md:gap-y-16'>
						{projects.map((project, index) => (
							<div
								key={index}
								className='mx-auto grid gap-y-8 gap-x-8 lg:gap-x-20 md:gap-x-12 md:grid-cols-2'>
								<div
									className={`mx-auto max-w-4xl md:order-${
										index % 2 === 0 ? 'first' : 'last'
									}`}>
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
								<div className='flex flex-col mx-auto gap-6 justify-center  w-full rounded-xl px-4'>
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
