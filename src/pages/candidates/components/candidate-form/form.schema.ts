import { z } from 'zod'
import { CANDIDATE_STATUS_VALUES, CANDIDATE_TYPE_VALUES } from '../../../../types/type'
import { MODULE_VALUES } from '../../../../types/module'

export const candidateSchema = z.object({
	type: z.enum(CANDIDATE_TYPE_VALUES),
	candidateStatus: z.enum(CANDIDATE_STATUS_VALUES),
	module: z.enum(MODULE_VALUES),
	fullName: z.string().min(1),
	age: z.coerce.number().min(18),
	contacts: z.string().min(1)
})

export type FormTypes = z.infer<typeof candidateSchema>