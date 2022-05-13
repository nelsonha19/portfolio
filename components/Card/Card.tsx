import { Flex, Heading, Text } from '@chakra-ui/react';
import React from 'react';

type CardProps = {
	heading?: string;
	children?: React.ReactChild | React.ReactChild[];
	[rest: string]: any;
};

const Card: React.FC<CardProps> = ({ heading, children, ...rest }) => {
	return (
		<Flex
			flexDir={'column'}
			// boxShadow={'md'}
			// border={'1px'}
			// borderColor={'telegram.200'}
			// borderRadius={'2xl'}
			w={{ base: '90%', md: '50%' }}
			mx={5}
			p={5}
			{...rest}
		>
			<Heading as={'h3'} mb={4}>
				{heading}
			</Heading>
			{children}
		</Flex>
	);
};

export default Card;
