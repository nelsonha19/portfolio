import React, { FC, useState } from 'react';
import { Button, Link as ChakraLink } from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

export default function HamburgerMenu() {
	const [ toggleMenu, setToggleMenu ] = useState(false);

	const menuHandler = () => {
		if (!toggleMenu) {
			setToggleMenu(true);
		} else {
			setToggleMenu(false);
		}
	};

	return (
		<React.Fragment>
			<Button
				display={{ base: 'inline-block', md: 'none' }}
				variant={'link'}
				_focus={{ outline: 'none' }}
				onClick={menuHandler}
			>
				{!toggleMenu ? <HamburgerIcon w={7} h={7} /> : <CloseIcon />}
			</Button>
			{toggleMenu && (
				<ul>
					<li>
						<Link href={'/'} passHref>
							<ChakraLink>Home</ChakraLink>
						</Link>
					</li>
					<li>
						<Link href={'/about'} passHref>
							<ChakraLink>About</ChakraLink>
						</Link>
					</li>
					<li>
						<Link href={'/'} passHref>
							<ChakraLink>Experience</ChakraLink>
						</Link>
					</li>
				</ul>
			)}
		</React.Fragment>
	);
}
