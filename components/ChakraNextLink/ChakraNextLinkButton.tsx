import Link, { LinkProps } from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';

type ChakraAndNextProps = ButtonProps & LinkProps;

function ChakraNextLinkButton({ href, children, prefetch = true, ...props }: ChakraAndNextProps) {
	return (
		<Link href={href} passHref prefetch={prefetch}>
			<Button as="a" {...props}>
				{children}
			</Button>
		</Link>
	);
}

export default ChakraNextLinkButton;
