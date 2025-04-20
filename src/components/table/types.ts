import type { TableProps } from 'react-data-table-component'
import type { ReactNode } from 'react'

export interface ITable<T> extends Omit<TableProps<T>, 'progressPending' | 'progressComponent'> {
	isLoading: boolean
	isFetching: boolean
	title: string
	action: ReactNode
}