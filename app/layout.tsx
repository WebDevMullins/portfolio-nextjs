import { Inter } from 'next/font/google'
import { Providers } from './providers'

import Footer from '@/components/Footer'
import Navigation from '@/components/ui/Navigation'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'WebDevMullins Portfolio',
	description: 'Brandon Mullins` portfolio'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html
			className='text-neutral-100 dark'
			lang='en'>
			<body className={inter.className}>
				<Providers>
					<Navigation />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
