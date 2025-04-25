import type { SelectProps } from '@mui/material/Select'

import type { IOption } from '../../types/components'

export interface IFilter<T extends string = string> extends Omit<SelectProps, 'onChange'> {
	options: IOption[]
	value: T
	onChange: (value: T | null | undefined) => void
}