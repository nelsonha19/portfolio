import {
  Grid,
  GridItem,
  Flex,
  Heading,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react'
import { ABOUT_PAGE_LANGUAGES } from '../../constants/technologyConstants'

export default function TechList() {
  return (
    <Flex flexDirection={'row'} wrap="wrap">
      <Flex flexDirection="column">
        <Heading>Languages</Heading>
        <UnorderedList>
          {ABOUT_PAGE_LANGUAGES.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column">
        <Heading>Languages</Heading>
        <UnorderedList>
          {ABOUT_PAGE_LANGUAGES.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column">
        <Heading>Languages</Heading>
        <UnorderedList>
          {ABOUT_PAGE_LANGUAGES.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
      <Flex flexDirection="column">
        <Heading>Languages</Heading>
        <UnorderedList>
          {ABOUT_PAGE_LANGUAGES.map((language) => (
            <ListItem>{language.tooltipText}</ListItem>
          ))}
        </UnorderedList>
      </Flex>
    </Flex>
  )
}
