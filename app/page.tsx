import ParticleEffect from '@/components/Particles'
import { Image } from '@nextui-org/react'

export default function Home() {
	return (
		<main className="flex md:items-center h-dvh relative bg-cover bg-[url('/images/bg-explosion.png')]">
			<div className='absolute top-[-10] right-0 h-full md:w-[75%] z-[2]'>
				<ParticleEffect />
			</div>
			<div className='absolute right-0 lg:w-96 lg:h-96 xl:w-[560px] xl:h-[560px] bottom-10 z-[10] w-96 h-96 md:w-72 md:h-72 md:block lg:block xl:right-30 2xl:right-40'>
				<Image
					src='/images/avatar.png'
					alt='Avatar pic'
					width={560}
					height={560}
				/>
			</div>
			<div className='flex flex-col gap-3 z-[10] lg:pl-40 px-4 pt-36 md:pt-10 xl:pt-30'>
				<h1 className='md:text-5xl text-white max-w-[500px] text-4xl'>
					Hi! I&apos;m{' '}
					<span className='text-red-500 font-semibold'>Brandon</span>.
				</h1>
				<p className='flex lg:text-lg text-md text-neutral-200 md:text-neutral-100 md:pb-2 max-w-[500px] 2xl:max-w-[600px] 2xl:text-2xl'>
					I&apos;m a passionate and aspiring full-stack web developer who recently completed an exciting journey through a rigorous boot camp.
					<br />
					<br />
					During my time in boot camp, I&apos;ve been honing my skills in both
					front-end and back-end development. I thrive in the world of
					JavaScript, React, and TailwindCSS. I find joy in turning innovative
					concepts into dynamic, responsive websites. Whether it&apos;s crafting
					pixel-perfect user interfaces or architecting robust server-side
					applications, I&apos;m always up for a challenge.
				</p>
			</div>
		</main>
	)
}
