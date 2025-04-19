import { toast } from 'react-toastify'
import type { AxiosError } from 'axios'
import type { IError } from '../types/errors'

export const showError = (error: unknown, fallback = 'Произошла ошибка'): void => {
	const err = error as AxiosError<IError>
	const message = err?.response?.data?.message || err?.message || fallback
	toast.error(message)
}