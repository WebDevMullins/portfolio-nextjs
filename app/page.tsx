import ParticleEffect from '@/components/Particles'
import { Image } from '@nextui-org/react'

export default function Home() {
	return (
		<main className="relative flex h-dvh bg-[url('/images/bg-explosion.png')] bg-cover md:items-center">
			<div className='absolute right-0 top-[-10] z-[2] h-full md:w-[75%]'>
				<ParticleEffect />
			</div>
			<div className='xl:right-30 absolute bottom-10 right-0 z-[10] h-52 w-52 sm:h-80 sm:w-80 md:block lg:block lg:h-96 lg:w-96 xl:h-[560px] xl:w-[560px] 2xl:right-40'>
				<Image
					src='/images/avatar.png'
					alt='Avatar pic'
					width={560}
					height={560}
				/>
			</div>
			<div className='xl:pt-30 z-[10] flex flex-col gap-3 px-4 pt-36 md:pt-10 lg:pl-40'>
				<h1 className='max-w-[500px] text-4xl text-white md:text-5xl'>
					Hi! I&apos;m{' '}
					<span className='font-semibold text-red-500'>Brandon</span>.
				</h1>
				<p className='text-md flex max-w-[500px] text-neutral-200 md:pb-2 md:text-neutral-100 lg:text-lg 2xl:max-w-[600px] 2xl:text-2xl'>
					I&apos;m a passionate and aspiring full-stack web developer who
					recently completed an exciting journey through a rigorous boot camp.
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
