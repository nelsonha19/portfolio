import Link from 'next/link';
import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type Props = {
	href: string;
	text: string;
};

export default function NavLink({ href, text }: Props) {
	const router = useRouter();
	const isActive = router.asPath === href;

	return (
		<Link href={href} passHref>
			<ChakraLink
				fontWeight={isActive ? 'semibold' : 'normal'}
				_focus={{outline: 'none'}}
				display={{ base: 'none', md: 'inline-block' }}
				p={1}
				px={{ sm: 3 }}
				py={{ sm: 2 }}
			>
				<span className="capsize">{text}</span>
			</ChakraLink>
		</Link>
	);
}
