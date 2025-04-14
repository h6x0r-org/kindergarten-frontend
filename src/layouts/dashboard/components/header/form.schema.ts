import { z } from 'zod'

export const loginSchema = z.object({
	username: z.string().min(1),
	password: z.string().min(1)
})

export const defaultValues = {
	username: '',
	password: ''
}

export type FormTypes = z.infer<typeof loginSchema>