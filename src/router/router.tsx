import { createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy } from 'react'

import { ROUTER } from '../constants/router'

const Layout = lazy(async () => await import('../layouts/dashboard'))
const Main = lazy(async () => await import('../pages/main'))
const Manager = lazy(async () => await import('../pages/manager'))
const Assistant = lazy(async () => await import('../pages/assistant'))
const Educator = lazy(async () => await import('../pages/educator'))
const Info = lazy(async () => await import('../pages/info'))

const children = [
	{
		path: ROUTER.INFO,
		element: <Info />
	}
]

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
				path: ROUTER.MAIN,
				element: <Main />,
				children
			},
			{
				path: ROUTER.MANAGER,
				element: <Manager />,
				children
			},
			{
				path: ROUTER.ASSISTANT,
				element: <Assistant />,
				children
			},
			{
				path: ROUTER.EDUCATOR,
				element: <Educator />,
				children
			}
		]
	}
])