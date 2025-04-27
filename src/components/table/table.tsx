import LinearProgress from '@mui/material/LinearProgress'
import DataTable from 'react-data-table-component'
import Typography from '@mui/material/Typography'

import { Container, tableStyles, WrapLinear, HeaderRow } from './styles'
import { Spinner } from '../spinner'
import type { ITable } from './types'

const HEADER_HEIGHT = 64
const FOOTER_HEIGHT = 32
const SCROLL_HEIGHT = `calc(100vh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px)`

export function Table<T>(props: ITable<T>) {
	const {
		isLoading,
		isFetching,
		data,
		title,
		columns,
		AddForm,
		...rest
	} = props

	return (
		<>
			<HeaderRow>
				<Typography variant="h6">{title}</Typography>
				<AddForm variant="add" />
			</HeaderRow>
			<Container>
				{isFetching && (
					<WrapLinear>
						<LinearProgress />
					</WrapLinear>
				)}
				<DataTable
					customStyles={tableStyles}
					fixedHeaderScrollHeight={SCROLL_HEIGHT}
					columns={columns}
					data={data}
					striped
					pointerOnHover
					highlightOnHover
					dense
					persistTableHead
					fixedHeader
					responsive
					progressPending={isLoading && !data?.length}
					progressComponent={<Spinner />}
					{...rest}
				/>
			</Container>
		</>
	)
}
