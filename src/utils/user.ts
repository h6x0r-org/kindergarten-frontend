import type { IUser, IToken } from '../types/user'

export const clearUser = () => {
	localStorage.clear()
	sessionStorage.clear()
}

export const setUser = (data: IUser) => {
	const user = JSON.stringify(data)
	localStorage.setItem('user', user)
}

export const getUser = (): (IUser & IToken) | null => {
	const raw = localStorage.getItem('user')
	if (!raw || raw === 'undefined') return null
	return JSON.parse(raw)
}