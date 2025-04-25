import { useController, type FieldValues } from 'react-hook-form'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'

import type { ISelect } from './types'

export const Select = <T extends FieldValues>({
												  name,
												  control,
												  label,
												  options,
												  ...props
											  }: ISelect<T>) => {
	const {
		field: {value, onChange, ...fieldProps},
		fieldState: {error, invalid}
	} = useController({name, control})

	const id = `select-${name}`
	const labelId = `${id}-label`

	return (
		<FormControl fullWidth error={invalid}>
			{label && <InputLabel id={labelId}>{label}</InputLabel>}
			<MuiSelect
				{...fieldProps}
				{...props}
				labelId={labelId}
				id={id}
				value={value ?? ''}
				label={label}
				onChange={onChange}
				sx={(theme) => ({
					width: theme.spacing(25)
				})}
			>
				{options.map(({value: optionValue, label: optionLabel}) => (
					<MenuItem key={optionValue} value={optionValue}>
						{optionLabel}
					</MenuItem>
				))}
			</MuiSelect>
			<FormHelperText>{error?.message}</FormHelperText>
		</FormControl>
	)
}