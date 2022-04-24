import { Flex, Center, Text, Spacer, Box, chakra, Button, useColorMode, Tooltip, useToast } from '@chakra-ui/react';
import { SunIcon, MoonIcon, CopyIcon } from '@chakra-ui/icons';
import React from 'react';
import NavLink from './NavLink';
import HamburgerMenu from './HamburgerMenu';

type Props = {};

export default function Header(props: Props) {
	const { colorMode, toggleColorMode } = useColorMode();
	const toast = useToast();

	const copyEmailHandler = () => {
		toast({
			title: 'Copied to clipboard',
			status: 'success',
			duration: 3000,
			isClosable: false
		});
	};

	return (
		<Flex {...props} justify={'center'} px={8}>
			<chakra.nav
				display={'flex'}
				alignItems={'center'}
				justifyContent={'space-between'}
				w="100%"
				maxW={'4xl'}
				pt={8}
				pb={{ base: 8, sm: 16 }}
			>
				<div>
					<HamburgerMenu />
					<NavLink href="/" text="Home" />
					<NavLink href="/about" text="About" />
					<NavLink href="/experience" text="Experience" />
					<NavLink href="/apps" text="Apps" />
				</div>
				<Flex alignItems={'center'}>
					<Tooltip label="Copy me to your clipboard!" openDelay={500}>
						<Button
							fontSize={'smaller'}
							colorScheme={'gray'}
							rightIcon={<CopyIcon />}
							fontWeight={'light'}
							cursor={'text'}
							display={{ base: 'none', sm: 'inline-block' }}
							mr={3}
							onClick={copyEmailHandler}
						>
							nelsonha19@gmail.com
						</Button>
					</Tooltip>
					<Button
						colorScheme={colorMode === 'light' ? 'gray' : 'whiteAlpha'}
						onClick={toggleColorMode}
						fontSize={'smaller'}
						color={colorMode === 'light' ? 'black' : 'yellow.300'}
					>
						{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
					</Button>
				</Flex>
			</chakra.nav>
		</Flex>
	);
}
