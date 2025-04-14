import { Link } from 'react-router-dom'
import IconMenu from '@mui/icons-material/Menu'
import IconClose from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

import { Logo } from '../../../../components/logo'
import { HEADER_LINKS } from './constants'
import { useHeader } from './useHeader'
import { Input } from '../../../../components/input'
import {
	Container,
	MobileNavbarContent,
	MobileMenuButton,
	MobileMenu,
	MobileHeader,
	NavbarContent,
	Wrapper,
	ModalWrapper
} from './styles'

export const Header = () => {
	const {
		toggleMobileMenu,
		mobileMenuOpen,
		modalOpen,
		handleOpen,
		handleClose,
		form,
		onSubmit,
		isPending,
		isLoggingOut,
		handleLogout,
		user
	} = useHeader()

	return (
		<>
			<Container>
				<Logo />
				<Wrapper>
					<NavbarContent>
						{HEADER_LINKS.map((link) => (
							<Link to={link.to} key={link.title}>
								{link.title}
							</Link>
						))}
					</NavbarContent>
					{user ? (
						<Button onClick={handleLogout} loading={isLoggingOut}>
							Выйти
						</Button>
					) : (
						<Button onClick={handleOpen}>
							Войти
						</Button>
					)}
				</Wrapper>
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
				<Box>
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
				</Box>
				{user ? (
					<Button onClick={handleLogout} loading={isLoggingOut}>
						Выйти
					</Button>
				) : (
					<Button onClick={handleOpen}>
						Войти
					</Button>
				)}
			</MobileMenu>

			<Modal
				onSubmit={form.handleSubmit(onSubmit)}
				open={modalOpen}
				onClose={handleClose}
				component="form"
			>
				<ModalWrapper>
					<Input
						label="Имя пользователя"
						name="username"
						control={form.control}
					/>
					<Input
						label="Пароль"
						name="password"
						type="password"
						control={form.control}
					/>
					<Button
						loading={isPending}
						type="submit"
						disabled={!form.formState.isValid}
					>
						Войти
					</Button>
				</ModalWrapper>
			</Modal>
		</>
	)
}
