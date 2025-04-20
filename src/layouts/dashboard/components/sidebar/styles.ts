import { styled } from '@mui/material/styles'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

export const SidebarContainer = styled('aside')(({theme}) => ({
	width: theme.spacing(7),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	borderRight: `1px solid ${theme.palette.divider}`,
	backgroundColor: theme.palette.background.paper,
	flexShrink: 0,
	height: '100%'
}))

export const StyledNavLink = styled(NavLink)(({theme}) => ({
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: `${theme.spacing(1)} 0`,

	'&.active .MuiIconButton-root': {
		color: theme.palette.common.black
	}
}))

export const StyledIconButton = styled(IconButton)(({theme}) => ({
	color: theme.palette.text.secondary,
	transition: theme.transitions.create('color', {
		duration: theme.transitions.duration.short,
		easing: theme.transitions.easing.easeInOut
	}),

	'&:hover': {
		color: theme.palette.common.black
	}
}))