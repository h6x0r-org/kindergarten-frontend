import { useState, useCallback, type Dispatch, type SetStateAction } from 'react'

interface IUseBooleanOutput {
	value: boolean
	setTrue: () => void
	setFalse: () => void
	toggle: () => void
	setValue: Dispatch<SetStateAction<boolean>>
}

interface IOption {
	onTrue?: () => void
	onFalse?: () => void
	onToggle?: () => void
}


export const useBoolean = (
	defaultValue = false,
	{onTrue, onFalse, onToggle}: IOption = {}
): IUseBooleanOutput => {
	const [value, setValue] = useState(defaultValue)

	const setTrue = useCallback(() => {
		setValue(true)
		onTrue?.()
	}, [onTrue])

	const setFalse = useCallback(() => {
		setValue(false)
		onFalse?.()
	}, [onFalse])

	const toggle = useCallback(() => {
		setValue(prev => !prev)
		onToggle?.()
	}, [onToggle])

	return {value, setValue, setTrue, setFalse, toggle}
}
