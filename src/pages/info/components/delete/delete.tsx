import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { IInfoList } from '../../../../types/info'
import { deleteInfo } from '../../../../apis/info'
import { useSectionFromPath } from '../../../../hooks/useSectionFromPath'
import { REACT_QUERY_KEYS } from '../../../../constants/react-query-keys'
import { useBoolean } from '../../../../hooks/useBoolean'

export const Delete = ({title, id}: IInfoList) => {
	const {setTrue, setFalse, value} = useBoolean()
	const module = useSectionFromPath()
	const queryClient = useQueryClient()

	const {mutate, isPending} = useMutation({
		mutationFn: () => deleteInfo(id),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: [REACT_QUERY_KEYS.INFO, module]})
			setFalse()
		}
	})

	return (
		<>
			<IconButton onClick={setTrue} aria-label="delete" size="small">
				<DeleteIcon fontSize="small" />
			</IconButton>

			<Dialog open={value} onClose={setFalse}>
				<DialogTitle>Удаление</DialogTitle>
				<DialogContent>
					<Typography>
						Вы действительно хотите удалить "{title}"?
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={setFalse} variant="outlined">
						Отмена
					</Button>
					<Button color="error" disabled={isPending} onClick={() => mutate()}>
						Удалить
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}