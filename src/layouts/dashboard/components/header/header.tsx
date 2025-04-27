import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { Logo } from '../../../../components/logo'
import { useHeader } from './useHeader'
import { Input } from '../../../../components/input'
import { Container } from './styles'

export const Header = () => {
	const {
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
				{user ? (
					<Button onClick={() => handleLogout()} loading={isLoggingOut}>
						Выйти
					</Button>
				) : (
					<Button onClick={handleOpen}>
						Войти
					</Button>
				)}
			</Container>

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
