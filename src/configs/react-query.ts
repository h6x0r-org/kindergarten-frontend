import { QueryCache, QueryClient, MutationCache } from '@tanstack/react-query'
import { showError } from '../utils/show-error'

export const queryClient = new QueryClient({
	queryCache: new QueryCache({
		onError: (error) => showError(error)
	}),
	mutationCache: new MutationCache({
		onError: (error) => showError(error)
	})
})