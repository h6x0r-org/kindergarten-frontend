import { usePage } from './usePage'
import { Table } from '../../components/table'
import { InfoForm } from './components/info-form'

const Main = () => {
	const page = usePage()

	return (
		<Table
			title="Информация"
			AddForm={InfoForm}
			{...page}
		/>
	)
}

export default Main
