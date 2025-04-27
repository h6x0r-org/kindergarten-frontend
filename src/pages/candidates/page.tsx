import Box from '@mui/material/Box'

import { usePage } from './usePage'
import { Table } from '../../components/table'
import { CandidateForm } from './components/candidate-form'
import { Filter } from '../../components/filter'
import { OPTIONS_TYPE_FILTER } from '../../types/type'

const Page = () => {
	const {type, setType, ...props} = usePage()

	return (
		<Table
			title="Кандидаты"
			AddForm={(props) => (
				<Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
					<Filter
						label="Тип"
						value={type}
						onChange={setType}
						options={OPTIONS_TYPE_FILTER}
					/>
					<CandidateForm {...props} />
				</Box>
			)}
			{...props}
		/>
	)
}

export default Page
