import {
  SiCsharp,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiSass,
  SiTeamcity,
  SiTypescript,
  SiVisualstudiocode,
} from 'react-icons/si'
import { FaAws, FaJava, FaReact } from 'react-icons/fa'
import { IconType } from 'react-icons'
import { ThemingProps } from '@chakra-ui/react'

export type techArrayType = {
  name: string
  icon?: IconType
  svgPath?: string
  tooltipText: string
  shouldInvert?: boolean
  type?: string
  colorScheme?: ThemingProps['colorScheme']
}

export const HOME_PAGE_TECH_STACKS: techArrayType[] = [
  {
    name: 'Typescript',
    icon: SiTypescript,
    tooltipText: 'Typescript',
  },
  {
    name: 'React',
    icon: FaReact,
    tooltipText: 'Typescript',
  },
  {
    name: 'Javascript',
    icon: SiJavascript,
    tooltipText: 'Typescript',
  },
  {
    name: 'Html',
    icon: SiHtml5,
    tooltipText: 'Typescript',
  },
  {
    name: 'css',
    icon: SiCss3,
    tooltipText: 'Typescript',
  },
  {
    name: 'sass',
    icon: SiSass,
    tooltipText: 'Typescript',
  },
  {
    name: 'aws',
    icon: FaAws,
    tooltipText: 'Typescript',
  },
  {
    name: 'teamcity',
    icon: SiTeamcity,
    tooltipText: 'Typescript',
  },
  {
    name: 'python',
    icon: SiPython,
    tooltipText: 'Typescript',
  },
  {
    name: 'vscode',
    icon: SiVisualstudiocode,
    tooltipText: 'Typescript',
  },
  {
    name: 'java',
    icon: FaJava,
    tooltipText: 'Typescript',
  },
  {
    name: 'dotnet',
    icon: SiCsharp,
    tooltipText: 'Typescript',
  },
]

export const ABOUT_PAGE_LANGUAGES: techArrayType[] = [
  {
    name: 'typescript',
    svgPath: `/svg/languages/typescript.svg`,
    tooltipText: 'TypeScript',
    type: 'language',
    colorScheme: 'whatsapp',
  },
  {
    name: 'javascript',
    svgPath: `/svg/languages/javascript.svg`,
    tooltipText: 'JavaScript',
    type: 'language',
    colorScheme: 'whatsapp',
  },
  {
    name: 'sass',
    svgPath: `/svg/languages/sass.svg`,
    tooltipText: 'Sass',
    type: 'language',
    colorScheme: 'whatsapp',
  },
  {
    name: 'java',
    svgPath: `/svg/languages/java.svg`,
    tooltipText: 'Java',
    type: 'language',
    colorScheme: 'whatsapp',
  },
  {
    name: 'c-sharp',
    svgPath: `/svg/languages/c-sharp-logo.svg`,
    tooltipText: 'C Sharp',
    type: 'language',
    colorScheme: 'whatsapp',
  },
  {
    name: 'python',
    svgPath: `/svg/languages/python.svg`,
    tooltipText: 'Python',
    type: 'language',
    colorScheme: 'whatsapp',
  },

  {
    name: 'css',
    svgPath: `/svg/languages/css3.svg`,
    tooltipText: 'CSS',
    type: 'language',
    colorScheme: 'whatsapp',
  },
  {
    name: 'HTML',
    svgPath: `/svg/languages/html5.svg`,
    tooltipText: 'HTML',
    type: 'language',
    colorScheme: 'whatsapp',
  },
]

export const ABOUT_PAGE_FRAMEWORKS: techArrayType[] = [
  {
    name: 'react',
    type: 'framework',
    svgPath: `/svg/frameworks/react-native.svg`,
    tooltipText: 'React ',
    colorScheme: 'blue',
  },
  {
    name: 'react-native',
    type: 'framework',
    svgPath: `/svg/frameworks/react-native-128.svg`,
    tooltipText: 'React Native',
    colorScheme: 'blue',
  },
  {
    name: 'nextjs',
    type: 'framework',
    svgPath: `/svg/frameworks/nextjs.svg`,
    tooltipText: 'NextJS',
    colorScheme: 'blue',
    shouldInvert: true,
  },
  {
    name: 'redux',
    type: 'framework',
    svgPath: `/svg/libraries/redux.svg`,
    tooltipText: 'Redux',
    colorScheme: 'blue',
  },
]
export const ABOUT_PAGE_LIBRARIES: techArrayType[] = [
  {
    name: 'nodejs',
    svgPath: `/svg/languages/nodejs.svg`,
    tooltipText: 'Node',
    type: 'language',
    colorScheme: 'whatsapp',
    shouldInvert: true,
  },
  {
    name: 'babel',
    type: 'framework',
    svgPath: `/svg/libraries/babel.svg`,
    tooltipText: 'Babel',
    colorScheme: 'blue',
  },
  {
    name: 'webpack',
    type: 'framework',
    svgPath: `/svg/libraries/webpack.svg`,
    tooltipText: 'Webpack',
    colorScheme: 'blue',
  },
  {
    name: 'dotnetcore',
    type: 'framework',
    svgPath: `/svg/frameworks/dotnetcore.svg`,
    tooltipText: '.NET',
    colorScheme: 'blue',
  },
  {
    name: 'git',
    type: 'library',
    svgPath: `/svg/tools/git.svg`,
    tooltipText: 'Git',
    colorScheme: 'gray',
  },

  {
    name: 'selenium',
    type: 'library',
    svgPath: `/svg/tools/selenium.svg`,
    tooltipText: 'Selenium',
    colorScheme: 'gray',
  },
  {
    name: 'postman',
    type: 'library',
    svgPath: `/svg/tools/postman-api.svg`,
    tooltipText: 'Postman',
    colorScheme: 'gray',
  },
]
export const ABOUT_PAGE_TOOLS: techArrayType[] = [
  {
    name: 'teamcity',
    type: 'tools',
    svgPath: `/svg/tools/teamcity.svg`,
    tooltipText: 'TeamCity',
    colorScheme: 'pink',
  },
  {
    name: 'splunk',
    type: 'tools',
    svgPath: `/svg/tools/splunk.svg`,
    tooltipText: 'Splunk',
    colorScheme: 'pink',
    shouldInvert: true,
  },
  {
    name: 'babel',
    type: 'framework',
    svgPath: `/svg/libraries/babel.svg`,
    tooltipText: 'Babel',
    colorScheme: 'blue',
  },
  {
    name: 'webpack',
    type: 'framework',
    svgPath: `/svg/libraries/webpack.svg`,
    tooltipText: 'Webpack',
    colorScheme: 'blue',
  },
  {
    name: 'git',
    type: 'library',
    svgPath: `/svg/tools/git.svg`,
    tooltipText: 'Git',
    colorScheme: 'gray',
  },

  {
    name: 'selenium',
    type: 'library',
    svgPath: `/svg/tools/selenium.svg`,
    tooltipText: 'Selenium',
    colorScheme: 'gray',
  },
  {
    name: 'postman',
    type: 'library',
    svgPath: `/svg/tools/postman-api.svg`,
    tooltipText: 'Postman',
    colorScheme: 'gray',
  },
  {
    name: 'visual-studio',
    type: 'tools',
    svgPath: `/svg/tools/visual-studio.svg`,
    tooltipText: 'Visual Studio',
    colorScheme: 'pink',
  },
  {
    name: 'vscode',
    type: 'tools',
    svgPath: `/svg/tools/vscode.svg`,
    tooltipText: 'Visual Studio Code',
    colorScheme: 'pink',
  },
  {
    name: 'jira',
    type: 'tools',
    svgPath: `/svg/tools/jira.svg`,
    tooltipText: 'Jira',
    colorScheme: 'pink',
  },
  {
    name: 'confluence',
    type: 'tools',
    svgPath: `/svg/tools/confluence.svg`,
    tooltipText: 'Confluence',
    colorScheme: 'pink',
  },
]
export const ABOUT_PAGE_CLOUD = [
  {
    name: 'aws',
    type: 'tools',
    svgPath: `/svg/tools/aws.svg`,
    tooltipText: 'Amazon Web Services',
    colorScheme: 'pink',
    shouldInvert: true,
  },
  {
    name: 'azure',
    type: 'tools',
    svgPath: `/svg/tools/azure.svg`,
    tooltipText: 'Azure',
    colorScheme: 'pink',
  },
  {
    name: 'docker',
    type: 'tools',
    svgPath: `/svg/tools/docker.svg`,
    tooltipText: 'Docker',
    colorScheme: 'pink',
  },
  {
    name: 'mongodb',
    type: 'library',
    svgPath: `/svg/frameworks/mongodb.svg`,
    tooltipText: 'MongoDB',
    colorScheme: 'gray',
  },
]
export const ALL_TECH_ARRAY: techArrayType[] = ABOUT_PAGE_LANGUAGES.concat(
  ABOUT_PAGE_FRAMEWORKS,
  ABOUT_PAGE_TOOLS,
  ABOUT_PAGE_LIBRARIES
)

export const FULL_ARRAY: techArrayType[] = [
  ...ABOUT_PAGE_LANGUAGES,
  ...ABOUT_PAGE_FRAMEWORKS,
  ...ABOUT_PAGE_TOOLS,
  ...ABOUT_PAGE_LIBRARIES,
]
