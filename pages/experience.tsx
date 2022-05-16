import React from 'react'
import Container from '../components/Container/Container'
import { Divider, Flex, Heading, Image, Text } from '@chakra-ui/react'
import WorkExperience from '../components/WorkExperience/WorkExperience'
import { workExperience } from '../constants/workExperience'

export default function Experience() {
  return (
    <Container>
      <Flex flexDir={'column'} mt={{ base: 2, md: 8 }}>
        <Flex flexDir={{ base: 'column-reverse', md: 'row' }}>
          <Flex flexDir={'column'} justifyContent={'center'} px={4}>
            <Heading mt={{ base: 2, md: 0 }}>Experience</Heading>
            <Text>
              A list of all my experiences and projects I have worked on
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              similique ipsa alias ipsam cum, reiciendis nostrum repudiandae
              quos aut unde.
            </Text>
          </Flex>
          <Flex flexDir={'column'} flexGrow={1} alignItems={'center'}>
            <Image
              src="/commbank_ad.jpeg"
              alt="nelson in commbank ad"
              w={'600px'}
              borderRadius={'lg'}
            />
            <Text as={'caption'} fontSize={'xs'} color={'GrayText'}>
              Me in a Commbank ad
            </Text>
          </Flex>
        </Flex>
        <Divider mt={8} />

        {workExperience.map((work) => (
          <WorkExperience key={work.id} work={work} />
        ))}

        <Heading>Other projects</Heading>
        <Text>I did other uni stuff, check out my github</Text>
      </Flex>
    </Container>
  )
}
