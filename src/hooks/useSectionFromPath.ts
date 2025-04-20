import { useLocation } from 'react-router-dom'

import { IModulePath, MODULE_MAP } from '../types/module'
import { ROUTER } from '../constants/router'


export const useSectionFromPath = (): IModulePath => {
	const location = useLocation()
	const raw = location.pathname.split('/')[1]

	return (raw in MODULE_MAP ? raw : ROUTER.MAIN) as IModulePath
}