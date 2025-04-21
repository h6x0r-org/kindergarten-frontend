import { usePage } from './usePage'
import { Table } from '../../components/table'

const Main = () => {
	const page = usePage()

	return (
		<>
			<Table title="Информация" {...page} />
		</>
	)
}

export default Main
