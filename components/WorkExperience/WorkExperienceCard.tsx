import React from 'react';
import { workExperienceType } from '../../constants/workExperience';
import { Box, Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ChakraNextLink from '../ChakraNextLink/ChakraNextLink';

type Props = { work: workExperienceType };

export default function WorkExperienceCard({ work }: Props) {
	return (
		<ChakraNextLink href={'/experience'} _hover={{ textDecoration: 'none' }}>
			<Flex direction={'row'} justifyContent={'space-between'} alignItems={'center'} height={'100px'} my={2}>
				<Flex direction={'column'} justifyContent="center" alignItems={'center'} p={{ md: 5 }} pr={3}>
					<Text fontSize={'xs'} as={'cite'} textAlign={'center'} fontStyle={'italic'}>
						{work.startDate}
						<Text>to</Text>
						{work.isCurrent ? 'Present' : work.endDate}
					</Text>
				</Flex>

				<Divider orientation="vertical" />

				{work.logoPath ? (
					<Image
						src={work.logoPath}
						boxSize={{ base: 16, md: 24 }}
						alt=""
						display={'inline'}
						verticalAlign={'middle'}
					/>
				) : (
					<Box boxSize={{ base: 16, md: 24 }} display={'inline'} verticalAlign={'middle'} />
				)}

				<Flex flexGrow={1} flexDirection="column" justifyContent={'center'}>
					<Heading as={'h4'} fontSize={{ base: 'sm', md: 'md' }}>
						{work.company}
					</Heading>
					<Text fontSize={'sm'}>{work.role}</Text>
				</Flex>

				<Flex p={5}>
					<AiOutlineArrowRight />
				</Flex>
			</Flex>
		</ChakraNextLink>
	);
}
