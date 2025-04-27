import Tooltip from '@mui/material/Tooltip'

import { SIDEBAR_LINKS } from './constants'
import { SidebarContainer, StyledNavLink, StyledIconButton } from './styles'

export const Sidebar = () => (
	<SidebarContainer>
		{SIDEBAR_LINKS.map(({Icon, title, path}) => (
			<Tooltip key={path} title={title} placement="right">
				<StyledNavLink to={path}>
					<StyledIconButton aria-label={title}>
						<Icon />
					</StyledIconButton>
				</StyledNavLink>
			</Tooltip>
		))}
	</SidebarContainer>
)