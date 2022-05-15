type Description = {
	main: string;
	sub?: string[];
};

export type workExperienceType = {
	id: number;
	role: string;
	company: string;
	description?: Description[];
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
			{
				main: 'working in the home buying domain'
			},
			{
				main: 'end to end stuff',
				sub: [ 'doign testing and dev work', 'sharing scrum master' ]
			}
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
			{
				main: 'Working in the home buying domain'
			},
			{
				main: 'End to end stuff',
				sub: [ 'doign testing and dev work', 'sharing scrum master' ]
			}
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
			{
				main: 'working in the home buying domain'
			},
			{
				main: 'end to end stuff',
				sub: [ 'doign testing and dev work', 'sharing scrum master' ]
			}
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
			{
				main: 'working in the home buying domain'
			},
			{
				main: 'end to end stuff',
				sub: [ 'doign testing and dev work', 'sharing scrum master' ]
			}
		],
		startDate: new Date(2021, 2, 1),
		isCurrent: true,
		type: 'Freelance'
	}
];
