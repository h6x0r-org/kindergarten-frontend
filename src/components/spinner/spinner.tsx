import CircularProgress from '@mui/material/CircularProgress'
import type { CircularProgressProps } from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Spinner = (props: CircularProgressProps) => {
	return (
		<Box margin="auto">
			<CircularProgress {...props} />
		</Box>
	)
}
