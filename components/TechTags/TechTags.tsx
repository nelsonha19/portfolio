import { Tag } from '@chakra-ui/react'
import cn from 'classnames'
import React from 'react'
import { techArrayType } from '../../constants/technologyConstants'
import styles from './TechTags.module.scss'

type Props = {
  techArray: techArrayType[]
  hoveredTech?: string
  hoverHandler?: (tech: string) => void
}

export default function TechTags({
  techArray,
  hoveredTech,
  hoverHandler,
}: Props) {
  return (
    <>
      {techArray.map((tech) => {
        return (
          <Tag
            key={tech.name}
            onMouseEnter={() => hoverHandler && hoverHandler(tech.name)}
            onMouseLeave={() => hoverHandler && hoverHandler('')}
            className={cn(
              hoveredTech === tech.name
                ? `${styles.tech} ${styles.tech_hovered}`
                : styles.tech
            )}
            m={1}
            fontSize={{ base: 'xs', md: 's' }}
            colorScheme={tech.colorScheme}
            variant={'subtle'}
          >
            {tech.tooltipText}
          </Tag>
        )
      })}
    </>
  )
}
