import { useState } from 'react'
import { Link } from 'react-router-dom'
import IconMenu from '@mui/icons-material/Menu'
import IconClose from '@mui/icons-material/Close'

import { Logo } from '../../../../components/logo'
import { HEADER_LINKS } from './constants'
import {
	Container,
	MobileNavbarContent,
	MobileMenuButton,
	MobileMenu,
	MobileHeader,
	NavbarContent
} from './styles'

export const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen((prev) => !prev)
	}

	return (
		<>
			<Container>
				<Logo />
				<NavbarContent>
					{HEADER_LINKS.map((link) => (
						<Link to={link.to} key={link.title}>
							{link.title}
						</Link>
					))}
				</NavbarContent>
				<MobileMenuButton
					onClick={toggleMobileMenu}
					aria-label="Open mobile menu"
					aria-expanded={mobileMenuOpen}
					aria-controls="slideout-menu"
				>
					<IconMenu />
				</MobileMenuButton>
			</Container>

			<MobileMenu open={mobileMenuOpen} id="slideout-menu">
				<MobileHeader>
					<Logo />
					<MobileMenuButton onClick={toggleMobileMenu} aria-label="Close mobile menu">
						<IconClose />
					</MobileMenuButton>
				</MobileHeader>
				<MobileNavbarContent>
					{HEADER_LINKS.map((link) => (
						<Link
							to={link.to}
							key={link.title}
							onClick={toggleMobileMenu}
						>
							{link.title}
						</Link>
					))}
				</MobileNavbarContent>
			</MobileMenu>
		</>
	)
}
