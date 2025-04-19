import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'

export const SidebarContainer = styled(Box)`
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid ${({theme}) => theme.palette.divider};
    background-color: ${({theme}) => theme.palette.background.paper};
    flex-shrink: 0;
    height: 100%;
`

export const StyledNavLink = styled(NavLink)(({theme}) => ({
	textDecoration: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	margin: '8px 0',

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