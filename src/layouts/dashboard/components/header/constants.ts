import { ROUTER } from '../../../../constants/router'

const sections = [
	{title: 'Главная', base: ROUTER.MAIN},
	{title: 'Менеджер', base: ROUTER.MANAGER},
	{title: 'Ассистент', base: ROUTER.ASSISTANT},
	{title: 'Воспитатель', base: ROUTER.EDUCATOR}
]

export const HEADER_LINKS = sections.map(({title, base}) => ({
	title,
	to: `${base}/${ROUTER.INFO}`
}))