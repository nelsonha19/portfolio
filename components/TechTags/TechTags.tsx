import { HStack, Tag, Text } from '@chakra-ui/react';
import cn from 'classnames'
import React, { useState } from 'react';
import { techArrayType } from '../../constants/technologyConstants';
import styles from './TechTags.module.scss';

type Props = {
	techArray: techArrayType[];
	hoveredTech: string;
    hoverHandler: (tech: string) => void
};

export default function TechTags({ techArray, hoveredTech, hoverHandler }: Props) {

	return (
		<>
			{techArray.map((tech) => {
				return (
					<Tag
						key={tech.name}
						onMouseEnter={() => hoverHandler(tech.name)}
						onMouseLeave={() => hoverHandler('')}
						className={cn(hoveredTech === tech.name ? `${styles.tech} ${styles.tech_hovered}` : styles.tech)}
                        m={1}
                        fontSize={{base: 'xs', md: 's'}}
					>
						{tech.tooltipText}
					</Tag>
				);
			})}
		</>
	);
}
