import { styled } from '@mui/material/styles'
import type { TableStyles } from 'react-data-table-component'
import { theme } from '../../configs/theme'
import Stack from '@mui/material/Stack'

export const HeaderRow = styled(Stack)(({ theme }) => ({
	padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	justifyContent: 'space-between',
}))

export const Container = styled('div')({
	overflow: 'auto',
	display: 'flex',
	flexDirection: 'column',
	position: 'relative'
})

export const WrapLinear = styled('div')`
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    position: absolute;
`

export const tableStyles: TableStyles = {
	headCells: {
		style: {
			backgroundColor: theme.palette.grey[100],
			color: theme.palette.text.primary,
			fontWeight: theme.typography.fontWeightBold,
			fontSize: theme.typography.subtitle2.fontSize
		}
	},
	cells: {
		style: {
			fontSize: theme.typography.body2.fontSize,
			color: theme.palette.text.secondary
		}
	}
}