import { zodResolver } from '@hookform/resolvers/zod'
import type { ZodType } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import EditIcon from '@mui/icons-material/Edit'
import AddIcon from '@mui/icons-material/Add'

import { useBoolean } from '../../../../hooks/useBoolean'
import { type FormTypes, candidateSchema } from './form.schema'
import { createCandidate, updateCandidate } from '../../../../apis/candidates'
import { REACT_QUERY_KEYS } from '../../../../constants/react-query-keys'
import { ICandidateForm } from '../../../../types/candidates'
import { useSearchParamState } from '../../../../hooks/useSearchParam'
import type { IType } from '../../../../types/type'

export const useCandidateForm = (props: ICandidateForm) => {
	const [param] = useSearchParamState<IType>('type', 'business_assistant')
	const {setFalse, setTrue, value: isOpen} = useBoolean()
	const queryClient = useQueryClient()
	const {
		id,
		type,
		fullName,
		variant,
		module,
		age,
		contacts,
		candidateStatus
	} = props
	const isEdit = variant === 'edit'
	const defaultValues = {
		fullName, age, contacts, candidateStatus, module, type
	}

	const form = useForm<FormTypes>({
		resolver: zodResolver(candidateSchema as ZodType<FormTypes>),
		mode: 'onChange',
		defaultValues
	})

	const mutationFn: (data: FormTypes) => Promise<void> =
		isEdit && id ? (data) => updateCandidate(id, data) : (data) => createCandidate(data)

	const {mutate, isPending} = useMutation<void, Error, FormTypes>({
		mutationFn,
		onSuccess: (_, variables) => {
			queryClient.invalidateQueries({queryKey: [REACT_QUERY_KEYS.CANDIDATES, param]})
			setFalse()
			form.reset(variables)
		}
	})

	const disabled = !form.formState.isValid || (isEdit && !form.formState.isDirty)
	const onSubmit = (data: FormTypes) => mutate(data)

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