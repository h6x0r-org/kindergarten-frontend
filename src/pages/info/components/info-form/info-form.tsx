import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { Input } from '../../../../components/input'
import type { IInfoForm } from '../../../../types/info'
import { useInfoForm } from './useInfoForm'
import { SideDialog } from './styles'
import { OPTIONS_MODULE } from '../../../../types/module'
import { Select } from '../../../../components/select'

export const InfoForm = (props: IInfoForm) => {
	const {
		setTrue,
		setFalse,
		form,
		onSubmit,
		isPending,
		disabled,
		isOpen,
		ui: {Icon, actionText, ariaLabel, label}
	} = useInfoForm(props)

	return (
		<>
			<IconButton onClick={setTrue} aria-label={ariaLabel} size="small">
				<Icon fontSize="small" />
			</IconButton>

			<SideDialog
				open={isOpen}
				onClose={setFalse}
				component="form"
				onSubmit={form.handleSubmit(onSubmit)}
				maxWidth="xs"
				fullWidth
			>
				<DialogTitle>{label}</DialogTitle>
				<DialogContent>
					<Select
						name="module"
						label="Модуль"
						control={form.control}
						options={OPTIONS_MODULE}
					/>
					<Input name="title" label="Заголовок" control={form.control} />
					<Input name="description" label="Описание" control={form.control} />
				</DialogContent>
				<DialogActions>
					<Button onClick={setFalse} variant="outlined">Отмена</Button>
					<Button loading={isPending} type="submit" disabled={disabled}>
						{actionText}
					</Button>
				</DialogActions>
			</SideDialog>
		</>
	)
}