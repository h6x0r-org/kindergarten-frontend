import type{ IModule } from './module'
import type { IForm } from './components'

export interface IInfoBase {
	id: string
	title: string
	description: string
	module: IModule
}

export interface IInfoList extends IInfoBase {
	links?: ILink[]
}

export interface ILink {
	name: string
	url: string
}

export type IInfoForm = IForm & Partial<IInfoBase>