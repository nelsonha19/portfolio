import React from 'react';
import {
	Button,
	Collapse,
	ListItem as ChakraListItem,
	UnorderedList,
	useColorModeValue,
	useDisclosure,
	Flex
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import styles from './HamburgerMenu.module.scss';
import Footer from '../Footer/Footer';
import ChakraNextLink from '../ChakraNextLink/ChakraNextLink';

type Props = {
	onToggle: () => void;
};

export default function HamburgerMenu(props: Props) {
	const bg = useColorModeValue('white', 'gray.800');
	const { isOpen, onToggle } = useDisclosure();

	const menuToggle = () => {
		onToggle();
		props.onToggle();
	};

	let ListItem = (props: any) => (
		<ChakraListItem {...props} mb={2} whiteSpace={'nowrap'} fontSize={'4xl'} fontWeight={'semibold'} />
	);

	return (
		<React.Fragment>
			<Button
				display={{ base: 'inline-block', md: 'none' }}
				variant={'link'}
				_focus={{ outline: 'none' }}
				onClick={menuToggle}
			>
				{!isOpen ? <HamburgerIcon w={9} h={9} /> : <CloseIcon />}
			</Button>
			<Collapse in={isOpen} animateOpacity>
				<Flex
					flexDir={'column'}
					pos={'absolute'}
					pt={6}
					zIndex={99}
					m={0}
					mt={8}
					w={'100%'}
					h={'92vh'}
					bgColor={bg}
				>
					<UnorderedList className={styles.mobileMenu} display={'flex'} flexDirection={'column'}>
						<ListItem>
							<ChakraNextLink href={'/'}>Home</ChakraNextLink>
						</ListItem>
						<ListItem>
							<ChakraNextLink href={'/about'}>About</ChakraNextLink>
						</ListItem>
						<ListItem>
							<ChakraNextLink href={'/experience'}>Experience</ChakraNextLink>
						</ListItem>
					</UnorderedList>
					<Footer />
				</Flex>
			</Collapse>
		</React.Fragment>
	);
}
