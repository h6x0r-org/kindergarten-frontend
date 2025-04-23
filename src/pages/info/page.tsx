import { usePage } from './usePage'
import { Table } from '../../components/table'
import { InfoForm } from './components/info-form'
import { useSectionFromPath } from '../../hooks/useSectionFromPath'

const Info = () => {
	const section = useSectionFromPath()	
	const page = usePage(section)

	return (
		<Table
			title="Информация"
			AddForm={(props) => <InfoForm {...props} module={section} />}
			{...page}
		/>
	)
}

export default Info
