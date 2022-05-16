import { Flex, Tag } from '@chakra-ui/react'
import React from 'react'

type Props = {
  tags: string[]
}

export default function WorkTags({ tags }: Props) {
  return (
    <Flex flexWrap={'wrap'}>
      {tags.map((tag) => {
        return (
          <Tag size={'sm'} key={tag} m={1} fontSize={{ base: 'xs', md: 's' }}>
            {tag}
          </Tag>
        )
      })}
    </Flex>
  )
}
