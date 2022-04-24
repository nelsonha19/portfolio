import React, { FC, useState } from 'react';
import {
	Button,
	Collapse,
	chakra,
	Link as ChakraLink,
	ListItem as ChakraListItem,
	UnorderedList,
	useColorModeValue,
	useDisclosure,
	Box,
	Flex
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from './HamburgerMenu.module.scss';

export default function HamburgerMenu() {
	const bg = useColorModeValue('white', 'gray.800');
	const { isOpen, onToggle } = useDisclosure();

	let ListItem = (props: any) => (
		<ChakraListItem {...props} mb={2} whiteSpace={'nowrap'} fontSize={'4xl'} fontWeight={'semibold'} />
	);

	return (
		<React.Fragment>
			<Button
				display={{ base: 'inline-block', md: 'none' }}
				variant={'link'}
				_focus={{ outline: 'none' }}
				onClick={onToggle}
			>
				{!isOpen ? <HamburgerIcon w={9} h={9} /> : <CloseIcon />}
			</Button>
			<Collapse in={isOpen} animateOpacity>
				<Flex
					flexDir={'column'}
					justifyContent={'space-between'}
					pos={'absolute'}
					pt={6}
					pl={4}
					zIndex={99}
					m={0}
					mt={8}
					w={'100%'}
					h={'92vh'}
					bgColor={bg}
				>
					<UnorderedList className={styles.mobileMenu} display={'flex'} flexDirection={'column'}>
						<ListItem>
							<Link href={'/'} passHref>
								<ChakraLink>Home</ChakraLink>
							</Link>
						</ListItem>
						<ListItem>
							<Link href={'/about'} passHref>
								<ChakraLink>About</ChakraLink>
							</Link>
						</ListItem>
						<ListItem>
							<Link href={'/'} passHref>
								<ChakraLink>Experience</ChakraLink>
							</Link>
						</ListItem>
					</UnorderedList>
					<Box mb={10}>Footer stuff</Box>
				</Flex>
			</Collapse>
		</React.Fragment>
	);
}
