export type workExperienceType = {
	id: number;
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
		id: 1,
		role: 'Software Engineer',
		company: 'Commonwealth Bank',
		description: [
			'Doing full stack development in the homebuying domain',
			'Working in an autonomous squad, responsible for delivering E2E',
			'Working in an autonomous squad, responsible for delivering E2E',
			'Working in an autonomous squad, responsible for delivering E2E',
			'Working in an autonomous squad, responsible for delivering E2E',
			'Working in an autonomous squad, responsible for delivering E2E',
			'Working in an autonomous squad, responsible for delivering E2E'
		],
		startDate: '05 2022',
		isCurrent: true,
		logoPath: '/cba.svg'
	},
	{
		id: 2,
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
	},
	{
		id: 3,
		role: 'Software Developer',
		company: "Sydney Children's Hospital",
		description: [
			'Completed two rotations in the Digital Operations & Technology business unit, 1 in the CommBank app team and 2 in NetBank web chapter',
			'Testing for 1st rotation'
		],
		startDate: '06 2020',
		endDate: '12 2020',
		isCurrent: false
	},
	{
		id: 4,
		role: 'Developer',
		company: 'The Beauty Mart',
		description: [
			'Completed two rotations in the Digital Operations & Technology business unit, 1 in the CommBank app team and 2 in NetBank web chapter',
			'Testing for 1st rotation'
		],
		startDate: '03 2021',
		isCurrent: true
	}
];
