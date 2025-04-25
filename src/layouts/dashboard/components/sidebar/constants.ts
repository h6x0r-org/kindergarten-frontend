import { ROUTER } from '../../../../constants/router'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import GroupIcon from '@mui/icons-material/Group'

export const SIDEBAR_LINKS = [
	{
		title: 'Информация',
		Icon: InfoOutlinedIcon,
		path: ROUTER.INFO
	},
	{
		title: 'Кандидаты',
		Icon: GroupIcon,
		path: ROUTER.CANDIDATES
	}
]