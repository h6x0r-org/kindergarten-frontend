import { usePage } from './usePage'
import { Table } from '../../components/table'
import Box from '@mui/material/Box'

// import { InfoForm } from './components/info-form'
import { Filter } from '../../components/filter'
import { IType } from '../../types/types'

const OPTIONS: { value: IType; label: string }[] = [
	{value: 'business_assistant', label: 'Ассистент'},
	{value: 'manager', label: 'Менеджер'},
	{value: 'educator', label: 'Воспитатель'},
	{value: 'nanny', label: 'Няня'}
]

const Page = () => {
	const {type, setType, ...props} = usePage()

	return (
		<Table
			title="Кандидаты"
			AddForm={(_) => (
				<Box display="flex" gap={2} p={2}>
					<Filter
						label="Тип"
						value={type}
						onChange={setType}
						options={OPTIONS}
						sx={{width: 240}}
					/>
				</Box>
			)}
			{...props}
		/>
	)
}

export default Page
