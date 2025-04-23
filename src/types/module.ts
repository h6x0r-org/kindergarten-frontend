export enum IModule {
	MAIN = 'MAIN',
	BASE = 'BASE',
	MANAGER = 'MANAGER',
	ASSISTANT = 'BUSINESS_ASSISTANT',
	EDUCATOR = 'EDUCATOR'
}

export const MODULE_MAP: Record<string, IModule> = {
	main: IModule.MAIN,
	base: IModule.BASE,
	manager: IModule.MANAGER,
	assistant: IModule.ASSISTANT,
	educator: IModule.EDUCATOR
}

export type IModulePath = keyof typeof MODULE_MAP