import { createBrowserRouter } from 'react-router-dom'
import { lazy } from 'react'

import { ROUTER } from '../constants/router'

const Layout = lazy(async () => await import('../layouts/dashboard'))
const Home = lazy(async () => await import('../pages/home'))
const Manager = lazy(async () => await import('../pages/manager'))
const Assistant = lazy(async () => await import('../pages/assistant'))
const Educator = lazy(async () => await import('../pages/educator'))
const Info = lazy(async () => await import('../pages/info'))

export const router = createBrowserRouter([
	{
		path: ROUTER.HOME,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: ROUTER.MANAGER,
				element: <Manager />
			},
			{
				path: ROUTER.ASSISTANT,
				element: <Assistant />
			},
			{
				path: ROUTER.EDUCATOR,
				element: <Educator />
			},
			{
				path: ROUTER.INFO,
				element: <Info />
			}
		]
	}
])