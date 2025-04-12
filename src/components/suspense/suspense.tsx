import { Suspense as ReactSuspense } from 'react'
import type { ISuspense } from './types'
import { Spinner } from '../spinner'

export const Suspense = ({children}: ISuspense) => (
	<ReactSuspense fallback={<Spinner />}>{children}</ReactSuspense>
)
