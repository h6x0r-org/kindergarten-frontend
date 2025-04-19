import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

interface IIconWrapper {
	active: boolean
}

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

export const IconWrapper = styled(IconButton, {
	shouldForwardProp: (prop) => prop !== 'active'
})<IIconWrapper>`
    margin: 8px 0;
    color: ${({active, theme}) => (active ? theme.palette.common.black : theme.palette.grey[500])};
    transition: ${({theme}) =>
            theme.transitions.create('color', {
                duration: theme.transitions.duration.short,
                easing: theme.transitions.easing.easeInOut
            })};

    &:hover {
        color: ${({theme}) => theme.palette.common.black};
    }
`