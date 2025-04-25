import type { FieldValues } from 'react-hook-form'
import type { SelectProps } from '@mui/material/Select'

import type { IControl, IOption } from '../../types/components'

export type ISelect<T extends FieldValues> = IControl<T> & SelectProps & {
	options: IOption[]
}