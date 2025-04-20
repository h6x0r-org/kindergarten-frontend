import LinearProgress from '@mui/material/LinearProgress'
import DataTable from 'react-data-table-component'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Container, WrapLinear } from './styles'
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
		action,
		columns,
		...rest
	} = props

	return (
		<Container>
			{isFetching && (
				<WrapLinear>
					<LinearProgress />
				</WrapLinear>
			)}
			<DataTable
				striped
				pointerOnHover
				highlightOnHover
				dense
				persistTableHead
				fixedHeader
				fixedHeaderScrollHeight={SCROLL_HEIGHT}
				columns={columns}
				data={data}
				responsive
				progressPending={isLoading && !data?.length}
				progressComponent={<Spinner />}
				subHeader
				subHeaderComponent={
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						width="100%"
					>
						{title && <Typography variant="h6">{title}</Typography>}
						{action}
					</Box>
				}
				{...rest}
			/>
		</Container>
	)
}
