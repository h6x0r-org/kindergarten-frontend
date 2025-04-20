import { IModule } from './module'

export interface IInfo {
	moduleName: IModule
	tableLink: string
	infoList: IInfoList[]
}

export interface IInfoList {
	id: string
	title: string
	description: string
	module: string
	links?: ILink[]
}

export interface ILink {
	name: string
	url: string
}
