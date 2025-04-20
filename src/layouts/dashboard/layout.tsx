import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Container } from './styles'
import { Suspense } from '../../components/suspense'

const Layout = () => (
	<Container>
		<Header />
		<Box display="flex" flex="1" minHeight={0} component="section">
			<Sidebar />
			<Stack flex="1" component="main">
				<Suspense>
					<Outlet />
				</Suspense>
			</Stack>
		</Box>
		{/* TODO: Footer */}
		<Box
			component="footer"
			sx={{
				flexShrink: 0,
				height: 32,
				display: 'flex',
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
