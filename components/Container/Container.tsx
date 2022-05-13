import { Fade, Flex, useDisclosure, chakra } from '@chakra-ui/react';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

type Props = {
	children: React.ReactNode;
};

export default function Container(props: Props) {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Fade in={true}>
			<chakra.div
				mx={{ base: 2, md: 8 }}
				display={'flex'}
				flexDir={'column'}
				h={'100vh'}
				justifyContent="space-between"
			>
				<Header onToggle={onToggle} />
				<Fade in={!isOpen}>
					<Flex justify={'center'}>
						<chakra.div w="100%" maxW={'4xl'}>
							{props.children}
						</chakra.div>
					</Flex>
				</Fade>
				<Footer />
			</chakra.div>
		</Fade>
	);
}
