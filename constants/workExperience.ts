export type workExperienceType = {
	id: number;
	role: string;
	company: string;
	description?: string[];
	startDate: Date;
	endDate?: Date;
	isCurrent: boolean;
	logoPath?: string;
	type: 'Employment' | 'PACE' | 'Freelance';
	isPrimary?: boolean;
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
		startDate: new Date(2022, 4, 1),
		isCurrent: true,
		logoPath: '/cba.svg',
		type: 'Employment',
		isPrimary: true
	},
	{
		id: 2,
		role: 'Technology Graduate',
		company: 'Commonwealth Bank',
		description: [
			'Completed two rotations in the Digital Operations & Technology business unit, 1 in the CommBank app team and 2 in NetBank web chapter',
			'Testing for 1st rotation'
		],
		startDate: new Date(2021, 1, 15),
		endDate: new Date(2022, 4, 1),
		isCurrent: false,
		logoPath: '/cba.svg',
		type: 'Employment'
	},
	{
		id: 3,
		role: 'Software Developer',
		company: "Sydney Children's Hospital",
		description: [
			'Completed two rotations in the Digital Operations & Technology business unit, 1 in the CommBank app team and 2 in NetBank web chapter',
			'Testing for 1st rotation'
		],
		startDate: new Date(2020, 5, 1),
		endDate: new Date(2020, 11, 1),
		isCurrent: false,
		type: 'PACE'
	},
	{
		id: 4,
		role: 'Developer',
		company: 'The Beauty Mart',
		description: [
			'Completed two rotations in the Digital Operations & Technology business unit, 1 in the CommBank app team and 2 in NetBank web chapter',
			'Testing for 1st rotation'
		],
		startDate: new Date(2021, 2, 1),
		isCurrent: true,
		type: 'Freelance'
	}
];
