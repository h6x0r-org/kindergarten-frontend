import { zodResolver } from '@hookform/resolvers/zod'
import type { ZodType } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'

import { useBoolean } from '../../../../hooks/useBoolean'
import { type FormTypes, infoSchema } from './form.schema'
import { createInfo, updateInfo } from '../../../../apis/info'
import { REACT_QUERY_KEYS } from '../../../../constants/react-query-keys'
import type { IInfoForm } from '../../../../types/info'
import { useSearchParamState } from '../../../../hooks/useSearchParam'
import type { IModulePath } from '../../../../types/module'

export const useInfoForm = (props: IInfoForm) => {
	const {setFalse, setTrue, value: isOpen} = useBoolean()
	const queryClient = useQueryClient()
	const [param] = useSearchParamState<IModulePath>('module', 'main')
	const {title, id, description, variant, module} = props
	const isEdit = variant === 'edit'
	const defaultValues = {
		title, description, module
	}

	const form = useForm<FormTypes>({
		resolver: zodResolver(infoSchema as ZodType<FormTypes>),
		mode: 'onChange',
		defaultValues
	})

	const mutationFn: (data: FormTypes) => Promise<void> =
		isEdit && id ? (data) => updateInfo(id, data) : (data) => createInfo(data)

	const {mutate, isPending} = useMutation<void, Error, FormTypes>({
		mutationFn,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({queryKey: [REACT_QUERY_KEYS.INFO, param]})
			setFalse()
			form.reset(variables)
		}
	})

	const onSubmit = (data: FormTypes) => mutate(data)
	const disabled = !form.formState.isValid || (isEdit && !form.formState.isDirty)

	return {
		setTrue,
		setFalse,
		isOpen,
		form,
		onSubmit,
		isPending,
		disabled,
		ui: {
			Icon: isEdit ? EditIcon : AddIcon,
			label: isEdit ? 'Редактирование' : 'Добавление',
			actionText: isEdit ? 'Сохранить' : 'Добавить',
			ariaLabel: isEdit ? 'edit' : 'add'
		}
	}
}