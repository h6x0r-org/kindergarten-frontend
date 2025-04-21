import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import { NavLink } from 'react-router-dom'

interface IMobileMenu {
	open: boolean;
}

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

export const Wrapper = styled('div')(({theme}) => ({
	display: 'flex',
	gap: theme.spacing(10),
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',
	[theme.breakpoints.down('md')]: {
		display: 'none'
	}
}))

export const StyledLink = styled(NavLink)(({theme}) => ({
	color: theme.palette.text.secondary,

	'&:hover': {
		color: theme.palette.common.black
	},

	'&.active': {
		color: theme.palette.common.black
	}
}))

export const NavbarContent = styled('div')(({theme}) => ({
	display: 'flex',
	gap: theme.spacing(4)
}))

export const MobileNavbarContent = styled('div')(({theme}) => ({
	display: 'flex',
	gap: theme.spacing(1),
	flexDirection: 'column'
}))

export const MobileMenuButton = styled(IconButton)(({theme}) => ({
	display: 'none',
	alignItems: 'center',
	justifyContent: 'center',

	[theme.breakpoints.down('md')]: {
		display: 'flex'
	}
}))

export const MobileMenu = styled('nav')<IMobileMenu>(({open, theme}) => ({
	height: '100%',
	width: theme.spacing(37),
	position: 'fixed',
	top: 0,
	bottom: 0,
	right: 0,
	backgroundColor: '#fff',
	padding: `0 ${theme.spacing(2)} ${theme.spacing(2)}`,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-between',
	zIndex: 2,
	transform: `translateX(${open ? '0' : '100%'})`,
	borderLeft: `1px solid ${theme.palette.divider}`,
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.standard,
		easing: theme.transitions.easing.easeInOut
	})
}))

export const MobileHeader = styled('div')(({theme}) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	height: theme.spacing(8)
}))