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
			w={{ base: '90%', md: '50%' }}
			mx={{ base: 0, md: 3 }}
			p={{ base: 0, md: 5 }}
			{...rest}
		>
			<Heading as={'h3'} mb={4} fontSize={'lg'}>
				{heading}
			</Heading>
			{children}
		</Flex>
	);
};

export default Card;
