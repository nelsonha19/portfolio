import { Fade, Flex, Link, useDisclosure, chakra } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
	children: React.ReactNode;
};

export default function Container(props: Props) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<chakra.div mx={8}>
			<Header onToggle={onToggle} />
			<Fade in={!isOpen}>
				<Flex justify={'center'}>
					<chakra.div w="100%" maxW={'4xl'}>
						{props.children}
						<Footer />
					</chakra.div>
				</Flex>
			</Fade>
		</chakra.div>
	);
}
