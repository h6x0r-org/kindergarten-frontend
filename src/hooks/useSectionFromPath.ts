import { useParams } from 'react-router-dom'

import { IModulePath, MODULE_MAP } from '../types/module'
import { ROUTER } from '../constants/router'


export const useSectionFromPath = (): IModulePath => {
	const { section } = useParams()

	if (section && section in MODULE_MAP) {
		return section as IModulePath
	}

	return ROUTER.MAIN
}