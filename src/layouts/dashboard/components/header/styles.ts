import { styled } from '@mui/material/styles'

export const Container = styled('header')(({theme}) => ({
	height: theme.spacing(8),
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(5),
	width: '100%',
	justifyContent: 'space-between',
	backgroundColor: theme.palette.background.paper,
	borderBottom: `1px solid ${theme.palette.divider}`,
	padding: `0 ${theme.spacing(2)}`
}))