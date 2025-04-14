import axios from 'axios'
import { getUser } from '../utils/user'

const baseURL = import.meta.env.VITE_API_BASE_URL

export const request = axios.create({
	baseURL
})

request.interceptors.request.use(
	(config) => {
		const user = getUser()
		if (user?.token) {
			config.headers.Authorization = `Bearer ${user.token}`
		}
		return config
	},
	(error) => Promise.reject(error)
)