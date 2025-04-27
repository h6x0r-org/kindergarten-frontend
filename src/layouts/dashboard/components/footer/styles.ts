import { styled } from '@mui/material/styles'

export const FooterContainer = styled('footer')(({theme}) => ({
	flexShrink: 0,
	height: 32,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	gap: theme.spacing(0.5),
	padding: theme.spacing(1),
	borderTop: `1px solid ${theme.palette.divider}`,
}))