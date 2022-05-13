import { Divider, Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

export default function EducationPanel({  }: Props) {
	return (
        <>
        <Heading as={'h4'} fontSize={'x-large'} mt={16} id="education">Education</Heading>
		<Flex justifyContent={'center'} alignItems="center" py={4} px={0}>
			<Image
				src="/macquarie-university.png"
				// boxSize={{ base: 10, md: 16 }}
				w={{base: '75px', md:'150px'}}
				alt=""
				mr={{base: 3, md:14}}
				display={'inline'}
				verticalAlign={'middle'}
				mb={'10px'}
			/>

			<Flex flexDir={'column'} flex={4}>
				<Flex justifyContent={'space-between'} alignItems="center" mb={1}>
					<Heading as={'h4'} fontSize={{base: 'md',md:'x-large'}} fontWeight={'medium'}>
						Macquarie University
					</Heading>
					<Text as={'samp'} fontSize={12}>
						2016-2020
					</Text>
				</Flex>
				<Text fontSize={{base: 'sm', md: 'md'}}>Bachelor of Commerce with a Bachelor of Science</Text>
				<Text fontSize={'sm'}>Majors in Finance and Software Technology</Text>
				<Divider mt={1} mb={4} />
				<Text fontSize={'sm'}>Weighted Average Mark: 76</Text>
				<Text as={'sub'} fontStyle={'italic'} my={2}>
					Academic transcript available on request
				</Text>
			</Flex>
		</Flex>
        </>
	);
}
