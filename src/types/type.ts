export const TYPE_VALUES = ['business_assistant', 'manager', 'educator', 'nanny'] as const
export type IType = (typeof TYPE_VALUES)[number];

export const TYPE_LABELS: Record<IType, string> = {
	business_assistant: 'Бизнес-ассистент',
	manager: 'Менеджер',
	educator: 'Воспитатель',
	nanny: 'Няня'
}

export const CANDIDATE_TYPE_LABELS: Record<ICandidateType, string> = {
	business: 'Бизнес',
	educator: 'Воспитатель',
	nanny: 'Няня'
}

export const CANDIDATE_STATUS_LABELS: Record<ICandidateStatus, string> = {
	ACCEPTED: 'Принят',
	REJECTED: 'Отклонён',
	NO_RESPONSE: 'Без ответа'
}

export const CANDIDATE_STATUS_VALUES = ['ACCEPTED', 'REJECTED', 'NO_RESPONSE'] as const
export type ICandidateStatus = (typeof CANDIDATE_STATUS_VALUES)[number];

export const CANDIDATE_TYPE_VALUES = ['business', 'educator', 'nanny'] as const
export type ICandidateType = (typeof CANDIDATE_TYPE_VALUES)[number];

export const OPTIONS_TYPE_FILTER = TYPE_VALUES.map((value) => ({
	value,
	label: TYPE_LABELS[value]
}))

export const OPTIONS_CANDIDATE_STATUS = CANDIDATE_STATUS_VALUES.map((value) => ({
	value,
	label: CANDIDATE_STATUS_LABELS[value]
}))

export const OPTIONS_CANDIDATE_TYPE = CANDIDATE_TYPE_VALUES.map((value) => ({
	value,
	label: CANDIDATE_TYPE_LABELS[value]
}))