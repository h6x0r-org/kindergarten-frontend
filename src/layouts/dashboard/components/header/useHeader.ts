import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ZodType } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'

import { type FormTypes, loginSchema, defaultValues } from './form.schema'
import { login, logout } from '../../../../apis/auth'
import { clearUser, getUser, setUser } from '../../../../utils/user'
import { IUser } from '../../../../types/user'

export const useHeader = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const [modalOpen, setModalOpen] = useState(false)
	const user = getUser()

	const form = useForm<FormTypes>({
		resolver: zodResolver(loginSchema as ZodType<FormTypes>),
		mode: 'onChange',
		defaultValues
	})

	const {mutate, isPending} = useMutation<IUser, Error, FormTypes>({
		mutationFn: async (data) => await login(data),
		onSuccess: (data) => {
			setUser(data)
			form.reset()
			setModalOpen(false)
		}
	})

	const {mutate: logoutMutate, isPending: isLoggingOut} = useMutation({
		mutationFn: logout,
		onSuccess: () => {
			clearUser()
		}
	})

	const onSubmit = (data: FormTypes) => mutate(data)
	const handleLogout = () => logoutMutate()

	return {
		user,
		isLoggingOut,
		isPending,
		onSubmit,
		form,
		modalOpen,
		handleLogout,
		mobileMenuOpen,
		handleOpen: () => setModalOpen(true),
		handleClose: () => setModalOpen(false),
		toggleMobileMenu: () => setMobileMenuOpen((prev) => !prev)
	}
}