import type { TableColumn } from 'react-data-table-component'
import { useQuery } from '@tanstack/react-query'

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
			name: 'title',
			selector: row => row.title
		},
		{
			name: 'description',
			selector: row => row.description
		}
	]

	return {
		columns,
		isLoading,
		isFetching,
		data,
	}
}