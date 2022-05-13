export type workExperienceType = {
	role: string;
	company: string;
	description?: string[];
	startDate: string;
	endDate?: string;
	isCurrent: boolean;
	logoPath?: string;
};

export const workExperience: workExperienceType[] = [
	{
		role: 'Software Engineer',
		company: 'Commonwealth Bank',
		description: [
			'Doing full stack development in the homebuying domain',
			'Working in an autonomous squad, responsible for delivering E2E'
		],
		startDate: '05 2022',
		isCurrent: true,
		logoPath: '/cba.svg'
	},
	{
		role: 'Technology Graduate',
		company: 'Commonwealth Bank',
		description: [
			'Completed two rotations in the Digital Operations & Technology business unit, 1 in the CommBank app team and 2 in NetBank web chapter',
			'Testing for 1st rotation'
		],
		startDate: '02 2021',
		endDate: '05 2022',
		isCurrent: false,
		logoPath: '/cba.svg'
	}
];
