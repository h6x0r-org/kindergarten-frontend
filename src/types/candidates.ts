import type { IForm } from './components'
import type { ICandidateStatus, ICandidateType } from './type'
import type { IModule } from './module'

export interface ICandidatesList {
	id: string
	type: ICandidateType
	fullName: string
	candidateEntryDate: string
	age: number
	contacts: string
	candidateStatus: ICandidateStatus
	interviewComments: string | null
	createdAt: string
	updatedAt: string
	module: IModule
	resumeLink: string
	previousCompanyName: string
	previousPositionName: string
	responsibilities: string
	dutiesPerformed: string | null
	handlingChallengesOrConflicts: string | null
	strengthsAndWeaknesses: string | null
	workingRelationsWithColleagues: string
	reasonForLeavingCompany: string | null
	reconsiderationForRehire: string | null
	multitaskingAndProjectManagement: string
	responsibilityScore: number
	examplesOfLeadership: string
	reliabilityAndTaskCompletion: string | null
	initiativeAndIdeas: string | null
	pastSalary: string
	motivationFactors: string
	handlingCriticism: string
	willingnessToLearnAndDevelop: string
	punctuality: string | null
	convenientBranch: string | null
	howDidTheyHearAboutUs: string | null
	education: string | null
	previousJobDetails: string | null
	handlingTimeConstraints: string | null
	recentLearningExperience: string | null
	personalInterests: string | null
	perceptionOfPeopleDesires: string | null
	reasonsForJobChange: string | null
	easeOfCollaboration: string | null
	salaryExpectations: string | null
	idealJobConcept: string | null
	thingsThatBringJoy: string | null
	bestErrorHandlingMethod: string | null
	bestMotivationalMethod: string | null
	dislikesInPeople: string | null
	suitabilityRating: string | null
	understandingOfBusinessAssistantRole: string | null
	desiredSkillsForAssistant: string | null
	interestInPositionAndCompany: string | null
	careerPathVision: string | null
	motivatingPastTasks: string | null
	handlingRoutineTasks: string | null
	idealWorkEnvironment: string | null
	handlingConflicts: string | null
	criticismAcceptanceExperience: string | null
	managingLimitedResources: string | null
	managedProjectsDetails: string | null
	usedToolsAndMethodsForManagement: string | null
	preferredToolsForTaskOrganization: string | null
	taskPrioritizationApproach: string | null
	idealRelationshipWithSupervisor: string | null
	workPlanningTools: string | null
	highWorkloadOrganization: string | null
	trackingWorkEffectiveness: string | null
	handlingOverwhelmingTasks: string | null
	adaptingToNewConditions: string | null
	desiredSkillsToDevelop: string | null
	referenceCompanyContacts: string | null
	interviewDecision: string | null
	interviewStatusMetric: string | null
	offlineInterviewMetrics: string | null
	testTaskEfficiencyMetric: string | null
	previousCompanyMetrics: string | null
	position: string | null
}

export type ICandidateForm = IForm & Partial<ICandidatesList>