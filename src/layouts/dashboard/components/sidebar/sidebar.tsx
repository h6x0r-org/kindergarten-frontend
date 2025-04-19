import Tooltip from '@mui/material/Tooltip'

import { SIDEBAR_LINKS } from './constants'
import { SidebarContainer, IconWrapper } from './styles'
import { useSidebar } from './useSidebar'

export const Sidebar = () => {
	const {handleNavigate, isActive} = useSidebar()

	return (
		<SidebarContainer>
			{SIDEBAR_LINKS.map(({Icon, title, path}) => (
				<Tooltip key={path} title={title} placement="right">
					<IconWrapper
						aria-label={title}
						active={isActive(path)}
						onClick={() => handleNavigate(path)}
					>
						<Icon />
					</IconWrapper>
				</Tooltip>
			))}
		</SidebarContainer>
	)
}
