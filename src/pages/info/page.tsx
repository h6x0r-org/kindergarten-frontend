import Box from '@mui/material/Box'

import { usePage } from './usePage'
import { Table } from '../../components/table'
import { InfoForm } from './components/info-form'
import { Filter } from '../../components/filter'
import { OPTIONS_FILTER } from '../../types/module'

const Page = () => {
	const {module, setModule, ...props} = usePage()

	return (
		<Table
			title="Информация"
			AddForm={(props) => (
				<Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
					<Filter
						label="Модуль"
						value={module}
						onChange={setModule}
						options={OPTIONS_FILTER}
					/>
					<InfoForm {...props} />
				</Box>
			)}
			{...props}
		/>
	)
}

export default Page
