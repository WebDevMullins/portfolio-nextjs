import { Link } from '@nextui-org/react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='fixed inset-x-0 bottom-0 z-20 flex h-auto w-full items-center justify-center gap-4 bg-transparent py-2 backdrop-blur-lg backdrop-saturate-150'>
			<Link
				href='https://github.com/WebDevMullins'
				target='_blank'>
				<Github className='text-white' />
			</Link>
			<Link
				href='https://www.linkedin.com/in/brandon-mullins/'
				target='_blank'>
				<Linkedin className='text-white' />
			</Link>
			<Link
				href='mailto:brandon@webdevmullins.com'
				target='_blank'>
				<Mail className='text-white' />
			</Link>
		</footer>
	)
}

export default Footer
