import type { TableColumn } from 'react-data-table-component'
import { useQuery } from '@tanstack/react-query'

import { REACT_QUERY_KEYS } from '../../constants/react-query-keys'
import { getUser } from '../../utils/user'
import type { ICandidatesList } from '../../types/candidates'
import { getCandidates } from '../../apis/candidates'
import { Delete } from './components/delete'
import { useSearchParamState } from '../../hooks/useSearchParam.ts'
import type { IType } from '../../types/types'
// import { InfoForm } from './components/info-form'

export const usePage = () => {
	const user = getUser()
	const [type, setType] = useSearchParamState<IType>('type', 'business_assistant')

	const {data = [], isLoading, isFetching} = useQuery<ICandidatesList[]>({
		queryKey: [REACT_QUERY_KEYS.CANDIDATES, type],
		queryFn: () => getCandidates(type),
		// TODO: fix in 2 places
		enabled: !!user
	})

	const columns: Array<TableColumn<ICandidatesList>> = [
		{name: 'ФИО', selector: row => row.fullName},
		{name: 'Тип', selector: row => row.type},
		{name: 'Возраст', selector: row => row.age},
		{name: 'Контакты', selector: row => row.contacts},
		{
			cell: row => (
				<>
					{/* <InfoForm {...row} variant="edit" module={module}  /> */}
					<Delete {...row} />
				</>
			),
			ignoreRowClick: true,
			width: '100px'
		}
	]

	return {
		type,
		setType,
		columns,
		isLoading,
		isFetching,
		data
	}
}