export const MODULE_VALUES = [
	'MAIN',
	'BASE',
	'MANAGER',
	'BUSINESS_ASSISTANT',
	'EDUCATOR'
] as const
export type IModule = (typeof MODULE_VALUES)[number];

export const MODULE_LABELS: Record<IModule, string> = {
	MAIN: 'Главный',
	BASE: 'Базовый',
	MANAGER: 'Менеджер',
	BUSINESS_ASSISTANT: 'Бизнес-ассистент',
	EDUCATOR: 'Воспитатель'
}

export const OPTIONS_MODULE = MODULE_VALUES.map((value) => ({
	value,
	label: MODULE_LABELS[value]
}))

export const MODULE_MAP: Record<string, IModule> = {
	main: 'MAIN',
	base: 'BASE',
	manager: 'MANAGER',
	assistant: 'BUSINESS_ASSISTANT',
	educator: 'EDUCATOR'
}

export const MODULE_PATH_VALUES = [
	'main',
	'base',
	'manager',
	'assistant',
	'educator'
] as const
export type IModulePath = (typeof MODULE_PATH_VALUES)[number];

export const OPTIONS_FILTER = Object.entries(MODULE_MAP).map(([path, moduleValue]) => ({
	value: path,
	label: MODULE_LABELS[moduleValue]
}))
