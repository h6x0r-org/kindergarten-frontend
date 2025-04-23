import { z } from 'zod'
import { IModule } from '../../../../types/module'

export const infoSchema = z.object({
	title: z.string().min(1),
	description: z.string().min(1),
	module: z.nativeEnum(IModule)
})

export type FormTypes = z.infer<typeof infoSchema>