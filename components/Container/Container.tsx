import { Flex, Link } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
	children: React.ReactNode;
};

export default function Container(props: Props) {
	return (
		<Flex flexDir={'column'} id="test" px={8} maxW={'4xl'}>
			<Header />
			{props.children}
			<Link>Test </Link>
			<Footer />
		</Flex>
	);
}
