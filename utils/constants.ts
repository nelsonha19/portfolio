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
		tooltipText: 'TypeScript'
	},
	{
		name: 'javascript',
		svgPath: `/svg/languages/javascript.svg`,
		tooltipText: 'JavaScript'
	},
	{
		name: 'sass',
		svgPath: `/svg/languages/sass.svg`,
		tooltipText: 'Sass'
	},
	{
		name: 'java',
		svgPath: `/svg/languages/java.svg`,
		tooltipText: 'Java'
	},
	{
		name: 'python',
		svgPath: `/svg/languages/python.svg`,
		tooltipText: 'Python'
	},
	{
		name: 'nodejs',
		svgPath: `/svg/languages/nodejs.svg`,
		tooltipText: 'Node',
		shouldInvert: true
	},
	{
		name: 'css',
		svgPath: `/svg/languages/css3.svg`,
		tooltipText: 'CSS'
	},
	{
		name: 'HTML',
		svgPath: `/svg/languages/html5.svg`,
		tooltipText: 'HTML'
	}
];

export const ABOUT_PAGE_FRAMEWORKS = [
	{
		name: 'react',
		svgPath: `/svg/frameworks/react-native.svg`,
		tooltipText: 'React '
	},
	{
		name: 'react-native',
		svgPath: `/svg/frameworks/react-native-128.svg`,
		tooltipText: 'React Native'
	},
	{
		name: 'nextjs',
		svgPath: `/svg/frameworks/nextjs.svg`,
		tooltipText: 'NextJS',
		shouldInvert: true
	},
	{
		name: 'redux',
		svgPath: `/svg/libraries/redux.svg`,
		tooltipText: 'Redux'
	},

	{
		name: 'babel',
		svgPath: `/svg/libraries/babel.svg`,
		tooltipText: 'Babel'
	},
	{
		name: 'webpack',
		svgPath: `/svg/libraries/webpack.svg`,
		tooltipText: 'Webpack'
	},
	{
		name: 'dotnetcore',
		svgPath: `/svg/frameworks/dotnetcore.svg`,
		tooltipText: '.NET'
	}
];
export const ABOUT_PAGE_LIBRARIES: techArrayType[] = [
	{
		name: 'git',
		svgPath: `/svg/tools/git.svg`,
		tooltipText: 'Git'
	},
	{
		name: 'mongodb',
		svgPath: `/svg/frameworks/mongodb.svg`,
		tooltipText: 'MongoDB'
	},
	{
		name: 'selenium',
		svgPath: `/svg/tools/selenium.svg`,
		tooltipText: 'Selenium'
	},
	{
		name: 'postman',
		svgPath: `/svg/tools/postman-api.svg`,
		tooltipText: 'Postman'
	}
];
export const ABOUT_PAGE_TOOLS: techArrayType[] = [
	{
		name: 'aws',
		svgPath: `/svg/tools/aws.svg`,
		tooltipText: 'Amazon Web Services',
		shouldInvert: true
	},
	{
		name: 'azure',
		svgPath: `/svg/tools/azure.svg`,
		tooltipText: 'Azure'
	},
	{
		name: 'docker',
		svgPath: `/svg/tools/docker.svg`,
		tooltipText: 'Docker'
	},
	{
		name: 'teamcity',
		svgPath: `/svg/tools/teamcity.svg`,
		tooltipText: 'TeamCity'
	},
	{
		name: 'splunk',
		svgPath: `/svg/tools/splunk.svg`,
		tooltipText: 'Splunk',
		shouldInvert: true
	},

	{
		name: 'visual-studio',
		svgPath: `/svg/tools/visual-studio.svg`,
		tooltipText: 'Visual Studio'
	},
	{
		name: 'vscode',
		svgPath: `/svg/tools/vscode.svg`,
		tooltipText: 'Visual Studio Code'
	},
	{
		name: 'jira',
		svgPath: `/svg/tools/jira.svg`,
		tooltipText: 'Jira'
	},
	{
		name: 'confluence',
		svgPath: `/svg/tools/confluence.svg`,
		tooltipText: 'Confluence'
	}
];
