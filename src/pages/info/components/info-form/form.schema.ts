import { z } from 'zod'
import { MODULE_VALUES } from '../../../../types/module'

export const infoSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	module: z.enum(MODULE_VALUES)
})

export type FormTypes = z.infer<typeof infoSchema>