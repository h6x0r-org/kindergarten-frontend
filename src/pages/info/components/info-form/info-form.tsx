import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { Input } from '../../../../components/input'
import type { IInfoForm } from '../../../../types/info'
import { useInfoForm } from './useInfoForm'

export const InfoForm = (props: IInfoForm) => {
	const {
		setTrue,
		setFalse,
		form,
		onSubmit,
		isPending,
		isOpen,
		ui: {Icon, actionText, ariaLabel, label}
	} = useInfoForm(props)	

	return (
		<>
			<IconButton onClick={setTrue} aria-label={ariaLabel} size="small">
				<Icon fontSize="small" />
			</IconButton>

			<Dialog
				open={isOpen}
				onClose={setFalse}
				component="form"
				onSubmit={form.handleSubmit(onSubmit)}
				maxWidth="xs"
				fullWidth
			>
				<DialogTitle>{label}</DialogTitle>
				<DialogContent>
					<Input name="title" label="Заголовок" control={form.control} />
					<Input name="description" label="Описание" control={form.control} />
				</DialogContent>
				<DialogActions>
					<Button onClick={setFalse} variant="outlined">Отмена</Button>
					<Button type="submit" disabled={!form.formState.isValid || isPending}>
						{actionText}
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}