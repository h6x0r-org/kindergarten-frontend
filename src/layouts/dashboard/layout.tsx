import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Container } from './styles'
import { Suspense } from '../../components/suspense'

const Layout = () => (
	<Container>
		<Header />
		<Box display="flex" flex="1">
			<Sidebar />
			<Box width="100%" padding={2}>
				<Suspense>
					<Outlet />
				</Suspense>
			</Box>
		</Box>
		{/* TODO: Footer */}
		<Box
			sx={{
				display: 'flex',
				height: 32,
				justifyContent: 'center',
				alignItems: 'center',
				padding: 1,
				borderTop: (theme) => `1px solid ${theme.palette.divider}`
			}}
		>
			Footer
		</Box>
	</Container>
)

export default Layout
