import type { TableProps } from 'react-data-table-component'
import type { ComponentType } from 'react'
import type { IForm } from '../../types/components'

export interface ITable<T> extends TableProps<T> {
	isLoading: boolean
	isFetching: boolean
	title: string
	AddForm: ComponentType<IForm>
}