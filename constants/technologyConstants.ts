import {
	SiAwsamplify,
	SiCsharp,
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiPython,
	SiSass,
	SiTeamcity,
	SiTypescript,
	SiVisualstudiocode
} from 'react-icons/si';
import { FaAws, FaJava, FaReact } from 'react-icons/fa';
import { IconType } from 'react-icons';

export type techArrayType = {
	name: string;
	icon?: IconType;
	svgPath?: string;
	tooltipText: string;
	shouldInvert?: boolean;
	type?: string;
};

export const HOME_PAGE_TECH_STACKS: techArrayType[] = [
	{
		name: 'Typescript',
		icon: SiTypescript,
		tooltipText: 'Typescript'
	},
	{
		name: 'React',
		icon: FaReact,
		tooltipText: 'Typescript'
	},
	{
		name: 'Javascript',
		icon: SiJavascript,
		tooltipText: 'Typescript'
	},
	{
		name: 'Html',
		icon: SiHtml5,
		tooltipText: 'Typescript'
	},
	{
		name: 'css',
		icon: SiCss3,
		tooltipText: 'Typescript'
	},
	{
		name: 'sass',
		icon: SiSass,
		tooltipText: 'Typescript'
	},
	{
		name: 'aws',
		icon: FaAws,
		tooltipText: 'Typescript'
	},
	{
		name: 'teamcity',
		icon: SiTeamcity,
		tooltipText: 'Typescript'
	},
	{
		name: 'python',
		icon: SiPython,
		tooltipText: 'Typescript'
	},
	{
		name: 'vscode',
		icon: SiVisualstudiocode,
		tooltipText: 'Typescript'
	},
	{
		name: 'java',
		icon: FaJava,
		tooltipText: 'Typescript'
	},
	{
		name: 'dotnet',
		icon: SiCsharp,
		tooltipText: 'Typescript'
	}
];

export const ABOUT_PAGE_LANGUAGES: techArrayType[] = [
	{
		name: 'typescript',
		svgPath: `/svg/languages/typescript.svg`,
		tooltipText: 'TypeScript',
		type: 'language'
	},
	{
		name: 'javascript',
		svgPath: `/svg/languages/javascript.svg`,
		tooltipText: 'JavaScript',
		type: 'language'
	},
	{
		name: 'sass',
		svgPath: `/svg/languages/sass.svg`,
		tooltipText: 'Sass',
		type: 'language'
	},
	{
		name: 'java',
		svgPath: `/svg/languages/java.svg`,
		tooltipText: 'Java',
		type: 'language'
	},
	{
		name: 'c-sharp',
		svgPath: `/svg/languages/c-sharp-logo.svg`,
		tooltipText: 'C Sharp',
		type: 'language'
	},
	{
		name: 'python',
		svgPath: `/svg/languages/python.svg`,
		tooltipText: 'Python',
		type: 'language'
	},
	{
		name: 'nodejs',
		svgPath: `/svg/languages/nodejs.svg`,
		tooltipText: 'Node',
		type: 'language',
		shouldInvert: true
	},
	{
		name: 'css',
		svgPath: `/svg/languages/css3.svg`,
		tooltipText: 'CSS',
		type: 'language'
	},
	{
		name: 'HTML',
		svgPath: `/svg/languages/html5.svg`,
		tooltipText: 'HTML',
		type: 'language'
	}
];

export const ABOUT_PAGE_FRAMEWORKS: techArrayType[] = [
	{
		name: 'react',
		type: 'framework',
		svgPath: `/svg/frameworks/react-native.svg`,
		tooltipText: 'React '
	},
	{
		name: 'react-native',
		type: 'framework',
		svgPath: `/svg/frameworks/react-native-128.svg`,
		tooltipText: 'React Native'
	},
	{
		name: 'nextjs',
		type: 'framework',
		svgPath: `/svg/frameworks/nextjs.svg`,
		tooltipText: 'NextJS',
		shouldInvert: true
	},
	{
		name: 'redux',
		type: 'framework',
		svgPath: `/svg/libraries/redux.svg`,
		tooltipText: 'Redux'
	},

	{
		name: 'babel',
		type: 'framework',
		svgPath: `/svg/libraries/babel.svg`,
		tooltipText: 'Babel'
	},
	{
		name: 'webpack',
		type: 'framework',
		svgPath: `/svg/libraries/webpack.svg`,
		tooltipText: 'Webpack'
	},
	{
		name: 'dotnetcore',
		type: 'framework',
		svgPath: `/svg/frameworks/dotnetcore.svg`,
		tooltipText: '.NET'
	}
];
export const ABOUT_PAGE_LIBRARIES: techArrayType[] = [
	{
		name: 'git',
		type: 'library',
		svgPath: `/svg/tools/git.svg`,
		tooltipText: 'Git'
	},
	{
		name: 'mongodb',
		type: 'library',
		svgPath: `/svg/frameworks/mongodb.svg`,
		tooltipText: 'MongoDB'
	},
	{
		name: 'selenium',
		type: 'library',
		svgPath: `/svg/tools/selenium.svg`,
		tooltipText: 'Selenium'
	},
	{
		name: 'postman',
		type: 'library',
		svgPath: `/svg/tools/postman-api.svg`,
		tooltipText: 'Postman'
	}
];
export const ABOUT_PAGE_TOOLS: techArrayType[] = [
	{
		name: 'aws',
		type: 'tools',
		svgPath: `/svg/tools/aws.svg`,
		tooltipText: 'Amazon Web Services',
		shouldInvert: true
	},
	{
		name: 'azure',
		type: 'tools',
		svgPath: `/svg/tools/azure.svg`,
		tooltipText: 'Azure'
	},
	{
		name: 'docker',
		type: 'tools',
		svgPath: `/svg/tools/docker.svg`,
		tooltipText: 'Docker'
	},
	{
		name: 'teamcity',
		type: 'tools',
		svgPath: `/svg/tools/teamcity.svg`,
		tooltipText: 'TeamCity'
	},
	{
		name: 'splunk',
		type: 'tools',
		svgPath: `/svg/tools/splunk.svg`,
		tooltipText: 'Splunk',
		shouldInvert: true
	},

	{
		name: 'visual-studio',
		type: 'tools',
		svgPath: `/svg/tools/visual-studio.svg`,
		tooltipText: 'Visual Studio'
	},
	{
		name: 'vscode',
		type: 'tools',
		svgPath: `/svg/tools/vscode.svg`,
		tooltipText: 'Visual Studio Code'
	},
	{
		name: 'jira',
		type: 'tools',
		svgPath: `/svg/tools/jira.svg`,
		tooltipText: 'Jira'
	},
	{
		name: 'confluence',
		type: 'tools',
		svgPath: `/svg/tools/confluence.svg`,
		tooltipText: 'Confluence'
	}
];

export const ALL_TECH_ARRAY: techArrayType[] = ABOUT_PAGE_LANGUAGES.concat(
	ABOUT_PAGE_FRAMEWORKS,
	ABOUT_PAGE_TOOLS,
	ABOUT_PAGE_LIBRARIES
);

export const FULL_ARRAY: techArrayType[] = [
	...ABOUT_PAGE_LANGUAGES,
	...ABOUT_PAGE_FRAMEWORKS,
	...ABOUT_PAGE_TOOLS,
	...ABOUT_PAGE_LIBRARIES
];
