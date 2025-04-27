import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { REACT_QUERY_KEYS } from '../../../../constants/react-query-keys'
import { useBoolean } from '../../../../hooks/useBoolean'
import type { ICandidatesList } from '../../../../types/candidates'
import { deleteCandidate } from '../../../../apis/candidates'
import { useSearchParamState } from '../../../../hooks/useSearchParam'
import type { IType } from '../../../../types/type'

export const Delete = ({fullName, id}: ICandidatesList) => {
	const {setTrue, setFalse, value} = useBoolean()
	const queryClient = useQueryClient()
	const [type] = useSearchParamState<IType>('type', 'business_assistant')

	const {mutate, isPending} = useMutation({
		mutationFn: () => deleteCandidate(id),
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: [REACT_QUERY_KEYS.CANDIDATES, type]})
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
						Вы действительно хотите удалить "{fullName}"?
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={setFalse} variant="outlined">
						Отмена
					</Button>
					<Button color="error" loading={isPending} onClick={() => mutate()}>
						Удалить
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}