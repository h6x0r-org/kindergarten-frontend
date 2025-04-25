import { useSearchParams } from 'react-router-dom'
import { useCallback } from 'react'

type ISearchParamState<T extends string> = [T, (value: T | null | undefined) => void]

export const useSearchParamState = <T extends string>(
	param: string,
	defaultValue: T
): ISearchParamState<T> => {
	const [searchParams, setSearchParams] = useSearchParams()

	const rawValue = searchParams.get(param)
	const value = (rawValue ?? defaultValue) as T

	const setValue = useCallback(
		(newValue: T | null | undefined) => {
			const nextParams = new URLSearchParams(searchParams)

			const shouldDelete =
				newValue === null ||
				newValue === undefined ||
				newValue === '' ||
				newValue === defaultValue

			if (shouldDelete) {
				nextParams.delete(param)
			} else {
				nextParams.set(param, newValue)
			}

			setSearchParams(nextParams)
		},
		[searchParams, setSearchParams, param, defaultValue]
	)

	return [value, setValue]
}