import React from 'react';
import Container from '../components/Container/Container';
import { Flex, Heading, Text } from '@chakra-ui/react';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import { workExperience } from '../constants/workExperience';

type Props = {};

export default function Experience({  }: Props) {
	return (
		<Container>
			<Flex flexDir={'column'}>
				<Heading>Experience</Heading>
				<Text>A list of all my experiences and projects I have worked on</Text>
				{workExperience.map((work) => <WorkExperience key={work.id} work={work} />)}

				<Heading>Other projects</Heading>
				<Text>I did other uni stuff, check out my github</Text>
			</Flex>
		</Container>
	);
}
