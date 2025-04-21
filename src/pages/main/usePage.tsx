import type { TableColumn } from 'react-data-table-component'
import { useQuery } from '@tanstack/react-query'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'

import type { IInfoList } from '../../types/info'
import { getInfo } from '../../apis/info'
import { REACT_QUERY_KEYS } from '../../constants/react-query-keys'
import { useSectionFromPath } from '../../hooks/useSectionFromPath'

export const usePage = () => {
	const module = useSectionFromPath()

	const {data = [], isLoading, isFetching} = useQuery<IInfoList[]>({
		queryKey: [REACT_QUERY_KEYS.INFO, module],
		queryFn: async () => await getInfo(module)
	})

	const columns: Array<TableColumn<IInfoList>> = [
		{
			name: 'Заголовок',
			selector: row => row.title
		},
		{
			name: 'Описание',
			selector: row => row.description
		},
		{
			cell: row => (
				<>
					<IconButton onClick={() => handleEdit(row)} aria-label="edit" size="small">
						<EditIcon fontSize="small" />
					</IconButton>
					<IconButton onClick={() => handleDelete(row)} aria-label="delete" size="small">
						<DeleteIcon fontSize="small" />
					</IconButton>
				</>
			),
			ignoreRowClick: true,
			width: '100px'
		}
	]

	const handleEdit = (item: IInfoList) => {
		console.log('Edit:', item)
	}

	const handleDelete = (item: IInfoList) => {
		console.log('Delete:', item)
	}

	return {
		columns,
		isLoading,
		isFetching,
		data
	}
}