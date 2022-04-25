import { SimpleGrid, Icon, Tooltip, Box } from '@chakra-ui/react';
import React from 'react';
import { IconBase, IconType } from 'react-icons';

type Props = {
	iconArray: { name: string; icon: IconType }[];
	iconSize?: string | number;
	gridGap?: string | number;
};

export default function TechnologiesGrid({ iconArray, iconSize = 10, gridGap = 1 }: Props) {
	return (
		<SimpleGrid columns={{ base: 3, sm: 4, md: 6 }} spacing={gridGap}>
			{iconArray.map((icon) => {
				return (
					<Tooltip key={icon.name} label={icon.name} placement="auto-end" openDelay={300}>
						<Box _hover={{ opacity: 0.8 }}>
							<Icon as={icon.icon} w={iconSize} h={iconSize} />
						</Box>
					</Tooltip>
				);
			})}
		</SimpleGrid>
	);
}
