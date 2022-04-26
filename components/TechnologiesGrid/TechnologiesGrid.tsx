import {
	SimpleGrid,
	Icon,
	Tooltip,
	Box,
	Slide,
	Image,
	Fade,
	Collapse,
	Flex,
	useColorModeValue
} from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { techArrayType } from '../../utils/constants';

type Props = {
	iconArray: techArrayType[];
	usesSvg?: boolean;
	iconSize?: string | number;
	gridGap?: string | number;
	columns?: number | { base?: number; sm?: number; md?: number };
};

export default function TechnologiesGrid({ iconArray, iconSize = 10, gridGap = 1, columns, usesSvg = false }: Props) {
	const darkModeStyle = useColorModeValue('', 'invert(100%');

	return (
		<SimpleGrid columns={columns || { base: 3, sm: 4, md: 6 }} spacing={gridGap} opacity={0.9}>
			{iconArray.map((icon) => {
				return (
					<Tooltip key={icon.name} label={icon.name} placement="auto-end" openDelay={300}>
						<Flex _hover={{ opacity: 0.8 }} align="center" justify={'center'}>
							{usesSvg ? (
								<Image
									src={icon.svgPath}
									alt={icon.name}
									boxSize={iconSize}
									style={icon.shouldInvert ? { filter: darkModeStyle } : {}}
								/>
							) : (
								<Icon as={icon.icon} w={iconSize} h={iconSize} />
							)}
						</Flex>
					</Tooltip>
				);
			})}
		</SimpleGrid>
	);
}
