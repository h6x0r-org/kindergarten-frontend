import type { TableColumn } from 'react-data-table-component'
import { useQuery } from '@tanstack/react-query'

import type { IInfoList } from '../../types/info'
import { getInfo } from '../../apis/info'
import { REACT_QUERY_KEYS } from '../../constants/react-query-keys'
import { getUser } from '../../utils/user'
import { Delete } from './components/delete'
import { InfoForm } from './components/info-form'
import type { IModulePath } from '../../types/module'

export const usePage = (module: IModulePath) => {
	const user = getUser()

	const {data = [], isLoading, isFetching} = useQuery<IInfoList[]>({
		queryKey: [REACT_QUERY_KEYS.INFO, module],
		queryFn: () => getInfo(module),
		enabled: !!user
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
					<InfoForm {...row} variant="edit" module={module}  />
					<Delete {...row} />
				</>
			),
			ignoreRowClick: true,
			width: '100px'
		}
	]

	return {
		columns,
		isLoading,
		isFetching,
		data
	}
}