import { Link } from '@nextui-org/react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
	return (
		<footer className='fixed gap-4 bottom-0 w-full h-auto py-2 backdrop-blur-lg inset-x-0 backdrop-saturate-150 bg-transparent justify-center flex items-center z-20'>
			<Link href='https://github.com/WebDevMullins'>
				<Github className='text-white' />
			</Link>
			<Link href='https://www.linkedin.com/in/brandon-mullins/'>
				<Linkedin className='text-white' />
			</Link>
			<Link href='mailto:brandon@webdevmullins.com'>
				<Mail className='text-white' />
			</Link>
		</footer>
	)
}

export default Footer
