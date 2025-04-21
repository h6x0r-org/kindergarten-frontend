import { IModule } from './module'
import { IForm } from './components.ts'

export interface IInfo {
	moduleName: IModule
	tableLink: string
	infoList: IInfoList[]
}

export interface IInfoBase {
	id: string
	title: string
	description: string
}

export interface IInfoList extends IInfoBase {
	module: string
	links?: ILink[]
}

export interface ILink {
	name: string
	url: string
}

export type IInfoForm = IForm & Partial<IInfoBase>