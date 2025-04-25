import { request } from '../configs/request'
import { ICandidatesList } from '../types/candidates'
import type { IType } from '../types/types'

export const getCandidates = async (type: IType): Promise<ICandidatesList[]> => {
	const response = await request(`candidates/${type}`)
	return response.data
}

export const deleteCandidate = async (id: string): Promise<void> => {
	await request.delete(`candidates/${id}`)
}

//
// export const updateInfo = async <T>(id: string, data: T): Promise<void> => {
// 	await request.put(`info/${id}`, data)
// }
//
// export const createInfo = async <T>(data: T): Promise<void> => {
// 	await request.post('info', data)
// }