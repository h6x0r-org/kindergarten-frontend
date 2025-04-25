import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import type { IFilter } from './types'

export const Filter = <T extends string>({
											 onChange,
											 label,
											 options,
											 ...props
										 }: IFilter<T>) => {
	const id = `filter-select-${label}`
	const labelId = `${id}-label`

	return (
		<FormControl fullWidth>
			{label && <InputLabel id={labelId}>{label}</InputLabel>}
			<MuiSelect
				id={id}
				labelId={labelId}
				label={label}
				onChange={(e) => onChange(e.target.value as T)}
				displayEmpty
				sx={(theme) => ({
					width: theme.spacing(25)
				})}
				{...props}
			>
				{options.map(({value: optionValue, label: optionLabel}) => (
					<MenuItem key={optionValue} value={optionValue}>
						{optionLabel}
					</MenuItem>
				))}
			</MuiSelect>
		</FormControl>
	)
}