import { request } from '../configs/requests'
import { IUser } from '../types/user'

export const login = async <T>(data: T): Promise<IUser & { token: string }> => {
	const {data: user, headers} = await request.post<IUser>('auth/login', data)
	const token = headers['authorization']
	return {...user, token}
}

export const logout = async () => await request.post('auth/logout', {})