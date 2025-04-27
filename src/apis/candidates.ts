import { request } from '../configs/request'
import { ICandidatesList } from '../types/candidates'
import type { IType } from '../types/type'

export const getCandidates = async (type: IType): Promise<ICandidatesList[]> => {
	const response = await request(`candidates/${type}`)
	return response.data
}

export const deleteCandidate = async (id: string): Promise<void> => {
	await request.delete(`candidates/${id}`)
}

export const updateCandidate = async <T>(id: string, data: T): Promise<void> => {
	await request.put(`candidates/${id}`, data)
}

export const createCandidate = async <T>(data: T): Promise<void> => {
	await request.post('candidates', data)
}