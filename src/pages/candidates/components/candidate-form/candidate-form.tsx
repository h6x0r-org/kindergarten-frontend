import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import { Input } from '../../../../components/input'
import { useCandidateForm } from './useCandidateForm'
import { SideDialog } from './styles'
import { Select } from '../../../../components/select'
import { OPTIONS_CANDIDATE_STATUS, OPTIONS_CANDIDATE_TYPE } from '../../../../types/type'
import { OPTIONS_MODULE } from '../../../../types/module'
import type { ICandidateForm } from '../../../../types/candidates'

export const CandidateForm = (props: ICandidateForm) => {
	const {
		setTrue,
		setFalse,
		form,
		onSubmit,
		isPending,
		isOpen,
		disabled,
		ui: {Icon, actionText, ariaLabel, label}
	} = useCandidateForm(props)

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
						name="type"
						label="Тип"
						control={form.control}
						options={OPTIONS_CANDIDATE_TYPE}
					/>
					<Select
						name="module"
						label="Модуль"
						control={form.control}
						options={OPTIONS_MODULE}
					/>
					<Select
						name="candidateStatus"
						label="Статус кандидата"
						control={form.control}
						options={OPTIONS_CANDIDATE_STATUS}
					/>
					<Input name="fullName" label="ФИО" control={form.control} />
					<Input name="age" label="Возраст" type="number" control={form.control} />
					<Input name="contacts" label="Контакты" control={form.control} />
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