export type UserType =
	| 'ROLE_ADMIN'
	| 'ROLE_SUPER_ADMIN'

export interface IUser {
	username: string
	roles: UserType[]
}

export interface IToken {
	token: string
}