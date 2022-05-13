import { ExternalLinkIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
	Box,
	Flex,
	Heading,
	Image,
	Text,
	SimpleGrid,
	UnorderedList,
	ListItem,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Card from '../components/Card/Card';
import Container from '../components/Container/Container';
import Link from '../components/Link/Link';
import TechnologiesGrid from '../components/TechnologiesGrid/TechnologiesGrid';
import { linksConstants } from '../utils/linksConstants';
import { BsFillCalendar2EventFill, BsSave, BsSave2Fill } from 'react-icons/bs';
import {
	ABOUT_PAGE_LANGUAGES,
	ABOUT_PAGE_FRAMEWORKS,
	ABOUT_PAGE_LIBRARIES,
	ABOUT_PAGE_TOOLS,
	ALL_TECH_ARRAY
} from '../utils/technologyConstants';
import ContactModal from '../components/ContactModal/ContactModal';
import TechTags from '../components/TechTags/TechTags';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import { workExperience } from '../utils/workExperience';
import { Divider } from '@chakra-ui/react';
import ChakraNextLink from '../components/ChakraNextLink/ChakraNextLink';

type Props = {};

export default function About({  }: Props) {
	const [ contactModal, setContactModal ] = useState(false);
	const [ hoveredTech, setHoveredTech ] = useState('');

	const meetingModalHandler = () => {
		setContactModal(!contactModal);
	};

	const hoverHandler = (techName: string) => {
		setHoveredTech(techName);
	};

	const gridWithTitle = (title: string, arrayOfTech: any) => {
		return (
			<Flex flexDir={'column'} align={'center'} justifyContent={'space-between'}>
				<TechnologiesGrid
					usesSvg
					columns={{ base: 4, sm: 6, md: 5 }}
					iconArray={arrayOfTech}
					iconSize={16}
					gridGap={2}
					hoverHandler={hoverHandler}
					hoveredTech={hoveredTech}
				/>
				<Heading size={'sm'} fontWeight={'medium'} mt={6}>
					{title}
				</Heading>
			</Flex>
		);
	};

	return (
		<Container>
			<Flex my={10} flexDir={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }}>
				<Flex px={{ md: 6 }} justify="center" minW={'35%'} maxW={{ md: '35%' }}>
					<Image src="/aboutme.jpg" w={{ base: '60%', md: '600px' }} h={'100%'} alt="Me" borderRadius={20} />
				</Flex>
				<Flex flexDir="column" align={{ base: 'center', md: 'flex-start' }} height="100%">
					<Heading mb={1}>About me</Heading>
					<Heading size={'sm'} mb={4}>
						Nelson Ha - Software Engineer
					</Heading>
					<Text textAlign={{ base: 'center', md: 'start' }}>
						I am a software engineer based in Sydney, Australia. I have the capability to do Full Stack
						Engineering, see below for my full list of technologies that I've worked with. However I think
						my biggest strength is my Front End development.
					</Text>

					<Flex
						flexDirection={'column'}
						w={'100%'}
						alignItems="center"
						justifyContent={'center'}
						h={{ base: '100px', md: '200px' }}
					>
						<Heading size={'md'} my={3}>
							Download Resume
						</Heading>
						<Menu>
							<MenuButton as={Button} colorScheme={'telegram'} variant={'outline'}>
								NelsonHa2022_Resume.pdf
							</MenuButton>
							<MenuList>
								<MenuItem>
									<ChakraNextLink href="/">Open in new tab</ChakraNextLink>
								</MenuItem>
								<MenuItem>Download</MenuItem>
							</MenuList>
						</Menu>
					</Flex>
				</Flex>
			</Flex>

			{/* The two cards */}
			<Flex
				flexDir={{ base: 'column', md: 'row' }}
				w={'100%'}
				justify={'center'}
				align={{ base: 'center', md: 'flex-start' }}
			>
				{/* Personal links */}
				<Card id={'links-container'} heading="Links" my={{ base: 3, md: 0 }}>
					<UnorderedList>
						{linksConstants.map((link) => {
							return (
								<ListItem key={link.name} py={1}>
									{link.name}:{' '}
									<ChakraNextLink
										href={link.url}
										isExternal
										// _target={'blank'}
										color={'telegram.500'}
										fontWeight={'medium'}
									>
										{link.display} <ExternalLinkIcon mx={'1px'} mb={1} />
									</ChakraNextLink>
								</ListItem>
							);
						})}
					</UnorderedList>
				</Card>

				{/* Meeting */}
				<Card id={'resume-container'} heading="Contact">
					<Text mb={4}>Want to hear more about me, hire me, or simply have a chat?</Text>
					<Button
						rightIcon={<BsFillCalendar2EventFill />}
						colorScheme={'telegram'}
						variant={'outline'}
						onClick={meetingModalHandler}
					>
						Arrange a meeting
					</Button>
					<ContactModal isOpen={contactModal} closeModal={() => setContactModal(false)} />
				</Card>
			</Flex>

			<Flex flexDirection={'column'} alignItems={'center'} py={10}>
				<Heading as={'h3'} id="tech-matrix">
					My tech stack
				</Heading>
				<SimpleGrid mt={10} columns={{ base: 1, md: 2 }} spacingX={1} spacingY={10} w={'100%'}>
					{gridWithTitle('Programming Languages', ABOUT_PAGE_LANGUAGES)}
					{gridWithTitle('Frameworks & Libraries', ABOUT_PAGE_FRAMEWORKS)}
					{gridWithTitle('Tools', ABOUT_PAGE_TOOLS)}
					{gridWithTitle('Other  & Miscellanious', ABOUT_PAGE_LIBRARIES)}
				</SimpleGrid>
			</Flex>

			<Flex flexDir={'column'} px={{ md: 3 }}>
				<Heading as={'h4'} size={'md'}>
					Tags
				</Heading>
				<Flex flexWrap={'wrap'} my={3}>
					<TechTags techArray={ALL_TECH_ARRAY} hoveredTech={hoveredTech} hoverHandler={hoverHandler} />
				</Flex>
			</Flex>

			<Flex flexDir={'column'}>
				<Heading>Work Experience</Heading>
				{workExperience.map((work) => (
					<React.Fragment key={work.role}>
						<WorkExperience work={work} />
						<Divider />{' '}
					</React.Fragment>
				))}
			</Flex>
		</Container>
	);
}
