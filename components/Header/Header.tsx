import {
	Flex,
	Center,
	Text,
	Spacer,
	Box,
	chakra,
	Button,
	useColorMode,
	Tooltip,
	useToast,
	useColorModeValue
} from '@chakra-ui/react';
import { SunIcon, MoonIcon, CopyIcon } from '@chakra-ui/icons';
import React from 'react';
import NavLink from '../NavLink/NavLink';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

type Props = {};

export default function Header(props: Props) {
	const { colorMode, toggleColorMode: toggle } = useColorMode();
	const themeColor = useColorModeValue('dark', 'light');

	const toast = useToast();

	const copyEmailHandler = () => {
		const email = document.getElementById('email')?.innerText || ''
		navigator.clipboard.writeText(email);
		toast({
			title: 'Copied to clipboard',
			status: 'info',
			duration: 3000,
			isClosable: false
		});
	};

	const toggleColorMode = () => {
		toggle();
		toast({
			title: `Switched to ${themeColor} mode`,
			status: 'success',
			duration: 2000
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
				position={'relative'}
				pt={8}
				pb={{ base: 8, sm: 16 }}
			>
				<chakra.div>
					<HamburgerMenu />
					<NavLink href="/" text="Home" />
					<NavLink href="/about" text="About" />
					<NavLink href="/experience" text="Experience" />
					<NavLink href="/apps" text="Apps" />
				</chakra.div>
				<chakra.div>
					<Flex alignItems={'center'}>
						<Tooltip label="Copy me to your clipboard!" openDelay={300}>
							<Button
							id={'email'}
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
						<Tooltip label={`Toggle ${themeColor} mode`} openDelay={300}>
							<Button
								id={'email'}
								colorScheme={colorMode === 'light' ? 'gray' : 'whiteAlpha'}
								onClick={toggleColorMode}
								fontSize={'smaller'}
								color={colorMode === 'light' ? 'black' : 'yellow.300'}
							>
								{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Tooltip>
					</Flex>
				</chakra.div>
			</chakra.nav>
		</Flex>
	);
}
