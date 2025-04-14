import { Outlet } from 'react-router-dom'
import Box from '@mui/material/Box'

import { Header } from './components/header'
import { Container } from './styles'
import { Suspense } from '../../components/suspense'

const Layout = () => (
	<Container>
		<Header />
		<Suspense>
			<Box margin='auto'>
				<Outlet />
			</Box>
		</Suspense>
		{/* TODO: Change later */}
		<Box position='absolute' bottom='0'>
			Footer
		</Box>
	</Container>
)

export default Layout
