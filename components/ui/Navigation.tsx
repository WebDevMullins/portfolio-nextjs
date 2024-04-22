'use client'

import {
	Link,
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle
} from '@nextui-org/react'
import { ComputerIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { set } from 'zod'

const Navigation = () => {
	// Using react-router-dom's useLocation hook to get the current path
	const path = usePathname()
	// State to manage the menu open/close status
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// Array of menu items
	const menuItems = ['Portfolio', 'Contact', 'Resume']

	// Rendering the Navigation component
	return (
		<header>
			{/* Navbar component from NextUI for creating a navigation bar */}
			<Navbar
				className='fixed top-0 bg-transparent'
				maxWidth='2xl'
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				// Customizing classNames for styling the navbar and its items
				classNames={{
					base: ['w-2xl'],
					item: [
						'flex',
						'relative',
						'h-10',
						'items-center',
						"data-[active=true]:after:content-['']",
						'data-[active=true]:after:absolute',
						'data-[active=true]:after:bottom-0',
						'data-[active=true]:after:left-0',
						'data-[active=true]:after:right-0',
						'data-[active=true]:after:h-[2px]',
						'data-[active=true]:after:rounded-[2px]',
						'data-[active=true]:after:bg-red-500'
					],
					menuItem: [
						'flex',
						'relative',
						'h-10',
						'items-center',
						"data-[active=true]:after:content-['']",
						'data-[active=true]:after:absolute',
						'data-[active=true]:after:bottom-0',
						'data-[active=true]:after:left-0',
						'data-[active=true]:after:right-0',
						'data-[active=true]:after:h-[2px]',
						'data-[active=true]:after:w-[85px]',
						'data-[active=true]:after:rounded-[2px]',
						'data-[active=true]:after:bg-red-500'
					]
				}}>
				{/* NavbarContent component for the content of the navbar */}
				<NavbarContent>
					{/* NavbarMenuToggle component for toggling the menu on smaller screens */}
					<NavbarMenuToggle
						aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
						className='sm:hidden'
					/>
					{/* NavbarBrand component for the brand/logo section */}
					<NavbarBrand className='gap-2'>
						<ComputerIcon className='hidden text-red-500 lg:block' />
						<Link
							className='font-semi text-xl text-inherit lg:text-3xl'
							href='/'
							aria-current='page'>
							<h1>
								Brandon <span className='font-thin'> Mullins</span>
							</h1>
						</Link>
					</NavbarBrand>
				</NavbarContent>
				{/* NavbarContent for the main navigation links */}
				<NavbarContent
					className='hidden gap-4 sm:flex'
					justify='center'>
					{/* Mapping through menuItems to create NavbarItem components */}
					{menuItems.map((item, index) => (
						<NavbarItem
							key={`${item}-${index}`}
							isActive={path === `/${item}`.split(' ').join('').toLowerCase()}>
							{/* Link component for each navigation item */}
							<Link
								color={'foreground'}
								className='w-full text-neutral-100'
								href={`/${item}`.split(' ').join('').toLowerCase()}
								size='lg'>
								{item}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>
				{/* NavbarContent for social media icons on the right */}
				<NavbarContent justify='end'>
					{/* NavbarItem for the Github link */}
					<NavbarItem className='flex'>
						<Link
							href='https://github.com/WebDevMullins'
							target='_blank'>
							<GithubIcon className='text-red-500' />
						</Link>
					</NavbarItem>
					{/* NavbarItem for the LinkedIn link */}
					<NavbarItem className='flex'>
						<Link
							href='https://www.linkedin.com/in/brandon-mullins/'
							target='_blank'>
							<LinkedinIcon className='text-red-500' />
						</Link>
					</NavbarItem>
					{/* NavbarItem for the Email link */}
					<NavbarItem className='flex'>
						<Link
							href='mailto:brandon@webdevmullins.com'
							target='_blank'>
							<MailIcon className='text-red-500' />
						</Link>
					</NavbarItem>
				</NavbarContent>
				{/* NavbarMenu component for the mobile menu */}
				<NavbarMenu>
					{/* Mapping through menuItems to create NavbarMenuItem components */}
					{menuItems.map((item, index) => (
						<NavbarMenuItem
							key={`${item}-${index}`}
							isActive={path === `/${item}`.split(' ').join('').toLowerCase()}>
							{/* Link component for each navigation item in the mobile menu */}
							<Link
								color={'foreground'}
								className='w-full'
								href={`/${item}`.split(' ').join('').toLowerCase()}
								size='lg'
								onClick={() => setIsMenuOpen(false)}>
								{item}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</Navbar>
		</header>
	)
}

export default Navigation
