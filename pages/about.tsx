import { Box, Flex, Heading, Image, Text, SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import Container from '../components/Container/Container';
import TechnologiesGrid from '../components/TechnologiesGrid/TechnologiesGrid';
import {
	ABOUT_PAGE_LANGUAGES,
	ABOUT_PAGE_FRAMEWORKS,
	ABOUT_PAGE_LIBRARIES,
	ABOUT_PAGE_TOOLS
} from '../utils/constants';

type Props = {};

export default function About({  }: Props) {
	const gridWithTitle = (title: string, arrayOfTech: any) => {
		return (
			<Flex flexDir={'column'} align={'center'} justifyContent={'space-between'}>
				<TechnologiesGrid
					usesSvg
					columns={{ base: 4, sm: 6, md: 5 }}
					iconArray={arrayOfTech}
					iconSize={16}
					gridGap={2}
				/>
				<Heading size={'sm'} fontWeight={'medium'} mt={6}>
					{title}
				</Heading>
			</Flex>
		);
	};

	return (
		<Container>
			<Flex mt={10} flexDir={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-start' }}>
				<Flex px={{ md: 6 }} justify="center" minW={'35%'} maxW={{ md: '35%' }}>
					<Image src="/aboutme.jpg" w={{ base: '60%', md: '600px' }} h={'100%'} alt="Me" borderRadius={20} />
				</Flex>
				<Flex flexDir="column" align={{ base: 'center', md: 'flex-start' }}>
					<Heading mb={1}>About me</Heading>
					<Heading size={'sm'} mb={4}>
						Nelson Ha - Software Engineer
					</Heading>
					<Text textAlign={{ base: 'center', md: 'start' }}>
						I am a software engineer based in Sydney, Australia. I have the capability to do Full Stack
						Engineering, see below for my full list of technologies that I've worked with. However I think
						my biggest strength is my Front End development.
					</Text>
				</Flex>
			</Flex>
			<Flex flexDirection={'column'} alignItems={'center'} py={10}>
				<Heading as={'h3'}>My tech stack</Heading>
				<SimpleGrid mt={10} columns={{ base: 1, md: 2 }} spacingX={1} spacingY={10} w={'100%'}>
					{gridWithTitle('Programming Languages', ABOUT_PAGE_LANGUAGES)}
					{gridWithTitle('Frameworks & Libraries', ABOUT_PAGE_FRAMEWORKS)}
					{gridWithTitle('Tools', ABOUT_PAGE_TOOLS)}
					{gridWithTitle('Other  & Miscellanious', ABOUT_PAGE_LIBRARIES)}
				</SimpleGrid>
			</Flex>
			<Flex flexDir={'column'}>
				<Heading>Work Experience</Heading>
				<Box w={'100%'} bgColor={'red.100'} h={50} my={10} />
				<Box w={'100%'} bgColor={'red.100'} h={50} my={10} />
				<Box w={'100%'} bgColor={'red.100'} h={50} my={10} />
			</Flex>
		</Container>
	);
}
