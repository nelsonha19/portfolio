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
import cn from 'classnames';
import React, { useState } from 'react';
import { techArrayType } from '../../utils/technologyConstants';
import styles from './Technologies.Grid.module.scss';

type Props = {
	iconArray: techArrayType[];
	usesSvg?: boolean;
	iconSize?: string | number;
	gridGap?: string | number;
	columns?: number | { base?: number; sm?: number; md?: number };
	hoverHandler?: (tech: string) => void;
	hoveredTech?: string;
};

export default function TechnologiesGrid({
	iconArray,
	iconSize = 10,
	gridGap = 1,
	columns,
	usesSvg = false,
	hoverHandler,
	hoveredTech
}: Props) {
	const darkModeStyle = useColorModeValue('', 'invert(100%');

	return (
		<SimpleGrid columns={columns || { base: 3, sm: 4, md: 6 }} spacing={gridGap}>
			{iconArray.map((icon) => {
				return (
					<Tooltip key={icon.name} label={icon.tooltipText} placement="auto-end" openDelay={1000}>
						<Flex
							_hover={{ opacity: 1 }}
							align="center"
							justify={'center'}
							className={cn(
								hoveredTech === icon.name ? `${styles.tech} ${styles.tech_hovered}` : styles.tech
							)}
							onMouseEnter={() => {
								hoverHandler && hoverHandler(icon.name);
							}}
							onMouseLeave={() => {
								hoverHandler && hoverHandler('');
							}}
						>
							{usesSvg ? (
								<Image
									src={icon.svgPath}
									alt={icon.name}
									boxSize={iconSize}
									id={icon.name}
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
