import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'
import Stack from '@mui/material/Stack'

export const Spinner = (props: CircularProgressProps) => {
	return (
		<Stack height="100%" justifyContent="center" alignItems="center">
			<CircularProgress {...props} />
		</Stack>
	)
}
