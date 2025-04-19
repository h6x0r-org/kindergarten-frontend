import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTER } from '../../../../constants/router'

export const useSidebar = () => {
	const navigate = useNavigate()
	const location = useLocation()

	const section = location.pathname.split('/')[1] || ROUTER.MAIN

	const handleNavigate = (path: string) => {
		navigate(`/${section}/${path}`)
	}

	const isActive = (path: string) => {
		const fullPath = `/${section}/${path}`
		return location.pathname.startsWith(fullPath)
	}

	return {
		handleNavigate,
		isActive
	}
}