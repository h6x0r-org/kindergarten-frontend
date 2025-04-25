import Tooltip from '@mui/material/Tooltip'

import { SIDEBAR_LINKS } from './constants'
import { SidebarContainer, StyledNavLink, StyledIconButton } from './styles'
import { useSectionFromPath } from '../../../../hooks/useSectionFromPath'

export const Sidebar = () => {
	const section = useSectionFromPath()

	return (
		<SidebarContainer>
			{SIDEBAR_LINKS.map(({Icon, title, path}) => {
				const fullPath = `${path}/${section}`

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
