import { Outlet } from 'react-router-dom'

import { Header } from './components/header'
import { Container } from './styles'
import { Suspense } from '../../components/suspense'

const Layout = () => (
	<Container>
		<Header />
		<Suspense>
			<div style={{ margin: 'auto' }}>
				<Outlet />
			</div>
		</Suspense>
		<div style={{ position: 'absolute', bottom: 0 }}>
			Footer
		</div>
	</Container>
)

export default Layout
