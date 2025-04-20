import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'

import { usePage } from './usePage'
import { Table } from '../../components/table'

const Main = () => {
	const page = usePage()

	return (
		<>
			<Table
				// TODO: Make dynamic
				title="Информация"
				action={
					<IconButton aria-label="Add">
						<AddIcon />
					</IconButton>
				}
				{...page}
			/>
		</>
	)
}

export default Main
