import { request } from '../configs/request'
import { IModulePath } from '../types/module'
import type { IInfoList } from '../types/info'

export const getInfo = async (module: IModulePath): Promise<IInfoList[]> => {
	const response = await request(`info/${module}`)
	return response.data.infoList
}