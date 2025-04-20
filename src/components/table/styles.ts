import { styled } from '@mui/material/styles'

export const Container = styled('div')(({theme}) => ({
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	position: 'relative',

	'header': {
		padding: `${theme.spacing(0.5)} ${theme.spacing(2)}`
	}
}))

export const WrapLinear = styled('div')`
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    position: absolute;
`
