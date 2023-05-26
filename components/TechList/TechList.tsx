import {
  ABOUT_PAGE_TOOLS,
  ABOUT_PAGE_CLOUD,
} from '../../constants/technologyConstants'
import {
  Grid,
  GridItem,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import {
  ABOUT_PAGE_LANGUAGES,
  ABOUT_PAGE_FRAMEWORKS,
} from '../../constants/technologyConstants'

export default function TechList() {
  return (
    <Flex
      flexDirection={'row'}
      wrap="wrap"
      justifyContent={'space-evenly'}
      w={{ base: '80vw', md: '70vw' }}
    >
      <Flex flexDirection="column" w={{ base: '40vw', md: '15vw' }}>
        <Heading size={'sm'} mt={3} mb={2}>
          Languages
        </Heading>
        <UnorderedList>
          {ABOUT_PAGE_LANGUAGES.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column" w={{ base: '40vw', md: '15vw' }}>
        <Heading size={'sm'} mt={3} mb={2}>
          Frameworks
        </Heading>
        <UnorderedList>
          {ABOUT_PAGE_FRAMEWORKS.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column" w={{ base: '40vw', md: '15vw' }}>
        <Heading size={'sm'} mt={3} mb={2}>
          Languages
        </Heading>
        <UnorderedList>
          {ABOUT_PAGE_TOOLS.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column" w={{ base: '40vw', md: '15vw' }}>
        <Heading size={'sm'} mt={3} mb={2}>
          Languages
        </Heading>
        <UnorderedList>
          {ABOUT_PAGE_CLOUD.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  )
}
