import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

interface IMobileMenu {
	open: boolean;
}

export const Container = styled('header')`
    height: 68px;
    display: flex;
    align-items: center;
    gap: 40px;
    width: 100%;
    justify-content: space-between;
    background-color: ${({theme}) => theme.palette.background.paper};
    border-bottom: 1px solid ${({theme}) => theme.palette.divider};
    padding: 0 16px;
`

export const Wrapper = styled('div')(({theme}) => ({
	display: 'flex',
	gap: '80px',
	alignItems: 'center',
	justifyContent: 'space-between',
	width: '100%',

	[theme.breakpoints.down('md')]: {
		display: 'none'
	}
}))

export const NavbarContent = styled('div')`
    display: flex;
    gap: 32px;
`

export const MobileNavbarContent = styled('div')`
    display: flex;
    gap: 8px;
    flex-direction: column;
`

export const MobileMenuButton = styled(IconButton)(({theme}) => ({
	display: 'none',
	alignItems: 'center',
	justifyContent: 'center',

	[theme.breakpoints.down('md')]: {
		display: 'flex'
	}
}))

export const MobileMenu = styled('nav')<IMobileMenu>(({open, theme}) => `
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  padding: 0 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  transform: translateX(${open ? '0' : '100%'});
  border-left: 1px solid ${theme.palette.divider};
  transition: ${theme.transitions.create('transform', {
	duration: theme.transitions.duration.standard,
	easing: theme.transitions.easing.easeInOut
})};
`)

export const MobileHeader = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
`

export const ModalWrapper = styled('div')(({theme}) => ({
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	maxWidth: 400,
	width: '80%',
	backgroundColor: theme.palette.background.paper,
	boxShadow: theme.shadows[24],
	padding: theme.spacing(4),
	display: 'flex',
	flexDirection: 'column',
	gap: theme.spacing(4)
}))
