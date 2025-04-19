import Tooltip from '@mui/material/Tooltip'
import { useLocation } from 'react-router-dom'

import { SIDEBAR_LINKS } from './constants'
import { SidebarContainer, StyledNavLink, StyledIconButton } from './styles'
import { ROUTER } from '../../../../constants/router'

export const Sidebar = () => {
	const location = useLocation()
	const section = location.pathname.split('/')[1] || ROUTER.MAIN

	return (
		<SidebarContainer>
			{SIDEBAR_LINKS.map(({Icon, title, path}) => {
				const fullPath = `/${section}/${path}`

				return (
					<Tooltip key={path} title={title} placement="right">
						<StyledNavLink to={fullPath}>
							<StyledIconButton aria-label={title}>
								<Icon />
							</StyledIconButton>
						</StyledNavLink>
					</Tooltip>
				)
			})}
		</SidebarContainer>
	)
}
