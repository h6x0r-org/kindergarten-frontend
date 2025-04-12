import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'

interface IMobileMenu {
	open: boolean;
}

export const Container = styled('header')`
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    width: 100%;
`

export const NavbarContent = styled('div')(({theme}) => ({
	display: 'none',
	gap: '32px',

	[theme.breakpoints.up('md')]: {
		display: 'flex'
	}
}))


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

export const MobileMenu = styled('nav')<IMobileMenu>(({open}) => `
  height: 100%;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  padding: 0 16px;
  transform: translateX(${open ? '0' : '-100%'});
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
`)

export const MobileHeader = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 68px;
`
