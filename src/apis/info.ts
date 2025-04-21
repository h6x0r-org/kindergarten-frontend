import { request } from '../configs/request'
import type { IModulePath } from '../types/module'
import type { IInfoList } from '../types/info'

export const getInfo = async (module: IModulePath): Promise<IInfoList[]> => {
	const response = await request(`info/${module}`)
	return response.data.infoList
}

export const deleteInfo = async (id: string): Promise<void> => {
	await request.delete(`info/${id}`)
}

export const updateInfo = async <T>(id: string, data: T): Promise<void> => {
	await request.put(`info/${id}`, data)
}

export const createInfo = async <T>(data: T): Promise<void> => {
	await request.post('info', data)
}