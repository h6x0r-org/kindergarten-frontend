import IconMenu from '@mui/icons-material/Menu'
import IconClose from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

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
	StyledLink
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
							<StyledLink to={link.to} key={link.title}>
								{link.title}
							</StyledLink>
						))}
					</NavbarContent>
					{user ? (
						<Button onClick={() => handleLogout()} loading={isLoggingOut}>
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
							<StyledLink to={link.to} key={link.title} onClick={toggleMobileMenu}>
								{link.title}
							</StyledLink>
						))}
					</MobileNavbarContent>
				</Box>
				{user ? (
					<Button onClick={() => handleLogout()} loading={isLoggingOut}>
						Выйти
					</Button>
				) : (
					<Button onClick={handleOpen}>
						Войти
					</Button>
				)}
			</MobileMenu>

			<Dialog
				open={modalOpen}
				onClose={handleClose}
				component="form"
				onSubmit={form.handleSubmit(onSubmit)}
				maxWidth="xs"
				fullWidth
			>
				<DialogTitle>Вход</DialogTitle>
				<DialogContent>
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
				</DialogContent>
				<DialogActions>
					<Button
						fullWidth
						loading={isPending}
						type="submit"
						disabled={!form.formState.isValid}
					>
						Войти
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
