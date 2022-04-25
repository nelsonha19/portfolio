import React from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

type Props = {
	children: React.ReactNode;
	href: string;
};

export default function Link(props: Props) {
	return (
		<NextLink href={props.href} passHref>
			<ChakraLink {...props}>{props.children}</ChakraLink>
		</NextLink>
	);
}
