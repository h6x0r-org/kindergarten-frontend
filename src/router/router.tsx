import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

import { ROUTER } from '../constants/router'

const Layout = lazy(async () => await import('../layouts/dashboard'))
const Info = lazy(async () => await import('../pages/info'))
const Candidates = lazy(async () => await import('../pages/candidates'))

export const router = createBrowserRouter([
	{
		path: ROUTER.LAYOUT,
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Navigate to={ROUTER.HOME} replace />
			},
			{
				path: `${ROUTER.INFO}/${ROUTER.SECTION}`,
				element: <Info />
			},
			{
				// TODO: Fix add filter to previis and fix route section
				path: `${ROUTER.CANDIDATES}/${ROUTER.SECTION}`,
				element: <Candidates />
			}
		]
	}
])