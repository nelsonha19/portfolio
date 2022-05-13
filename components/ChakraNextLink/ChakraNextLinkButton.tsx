import Link, { LinkProps } from 'next/link';
import { Button, ButtonProps } from '@chakra-ui/react';

type ChakraAndNextProps = ButtonProps & LinkProps;

function ChakraNextLinkButton({ href, children, ...props }: ChakraAndNextProps) {
	return (
		<Link href={href} passHref>
			<Button as="a" {...props}>
				{children}
			</Button>
		</Link>
	);
}

export default ChakraNextLinkButton;
