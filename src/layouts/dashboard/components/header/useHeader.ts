import { useForm } from 'react-hook-form'
import type { ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { type FormTypes, loginSchema, defaultValues } from './form.schema'
import { login, logout } from '../../../../apis/auth'
import { clearUser, getUser, setUser } from '../../../../utils/user'
import { IUser } from '../../../../types/user'
import { useBoolean } from '../../../../hooks/useBoolean'

export const useHeader = () => {
	const user = getUser()
	const {
		value: modalOpen,
		setTrue: handleOpen,
		setFalse: handleClose
	} = useBoolean()

	const form = useForm<FormTypes>({
		resolver: zodResolver(loginSchema as ZodType<FormTypes>),
		mode: 'onChange',
		defaultValues
	})

	const {mutate, isPending} = useMutation<IUser, Error, FormTypes>({
		mutationFn: data => login(data),
		onSuccess: (data) => {
			setUser(data)
			form.reset()
			handleClose()
		}
	})

	const {mutate: logoutMutate, isPending: isLoggingOut} = useMutation({
		mutationFn: logout,
		onSuccess: () => {
			clearUser()
		}
	})

	const onSubmit = (data: FormTypes) => mutate(data)

	return {
		user,
		isLoggingOut,
		isPending,
		onSubmit,
		form,
		modalOpen,
		handleOpen,
		handleClose,
		handleLogout: logoutMutate
	}
}