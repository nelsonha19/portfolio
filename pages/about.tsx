import {
  ExternalLinkIcon,
  ArrowForwardIcon,
  DownloadIcon,
} from '@chakra-ui/icons'
import {
  Flex,
  Heading,
  Image,
  Text,
  SimpleGrid,
  UnorderedList,
  ListItem,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tag,
  TagLabel,
  TagRightIcon,
  Tooltip,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Card from '../components/Card/Card'
import Container from '../components/Container/Container'
import TechnologiesGrid from '../components/TechnologiesGrid/TechnologiesGrid'
import { linksConstants } from '../constants/linksConstants'
import { BsFillCalendar2EventFill } from 'react-icons/bs'
import {
  ABOUT_PAGE_LANGUAGES,
  ABOUT_PAGE_FRAMEWORKS,
  ABOUT_PAGE_LIBRARIES,
  ABOUT_PAGE_TOOLS,
  FULL_ARRAY,
} from '../constants/technologyConstants'
import ContactModal from '../components/ContactModal/ContactModal'
import TechTags from '../components/TechTags/TechTags'
import WorkExperience from '../components/WorkExperience/WorkExperienceCard'
import { workExperience } from '../constants/workExperience'
import { Divider } from '@chakra-ui/react'
import ChakraNextLink from '../components/ChakraNextLink/ChakraNextLink'
import ChakraNextLinkButton from '../components/ChakraNextLink/ChakraNextLinkButton'
import EducationPanel from '../components/EducationPanel/EducationPanel'
import { techArrayType } from '../constants/technologyConstants'

export default function About() {
  const [contactModal, setContactModal] = useState(false)
  const [hoveredTech, setHoveredTech] = useState('')

  const meetingModalHandler = () => {
    setContactModal(!contactModal)
  }

  const hoverHandler = (techName: string) => {
    setHoveredTech(techName)
  }

  const scrollToId = (id: string) => {
    const element = document.getElementById(id)
    window.scrollTo({
      top: element?.offsetTop,
      behavior: 'smooth',
    })
  }

  const gridWithTitle = (title: string, arrayOfTech: techArrayType[]) => {
    return (
      <Flex
        flexDir={'column'}
        align={'center'}
        justifyContent={'space-between'}
      >
        <TechnologiesGrid
          usesSvg
          columns={{ base: 5, sm: 6, md: 5 }}
          iconArray={arrayOfTech}
          iconSize={16}
          gridGap={2}
          hoverHandler={hoverHandler}
          hoveredTech={hoveredTech}
        />
        <Heading size={'sm'} fontWeight={'medium'} mt={3}>
          {title}
        </Heading>
        <Divider mt={1} display={{ base: 'none', md: 'unset' }} />
      </Flex>
    )
  }

  return (
    <Container title="About Me - Nelson Ha">
      <Flex
        mt={10}
        flexDir={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-start' }}
      >
        <Flex px={{ md: 6 }} justify="center" minW={'35%'} maxW={{ md: '35%' }}>
          <Image
            src="/aboutme.jpg"
            w={{ base: '60%', md: '600px' }}
            h={'100%'}
            alt="Me"
            borderRadius={20}
          />
        </Flex>
        <Flex
          flexDir="column"
          align={{ base: 'center', md: 'flex-start' }}
          height="100%"
        >
          <Heading mb={1}>About me</Heading>
          <Heading size={'sm'} mb={4}>
            Nelson Ha - Software Engineer
          </Heading>
          <Text textAlign={{ base: 'center', md: 'start' }}>
            I am a software engineer based in Sydney, Australia. I have the
            capability to do Full Stack Engineering, see below for my full list
            of technologies that I&apos;ve worked with. My biggest strength is
            front end development 😉
          </Text>

          <Text>Quick links</Text>
          <ul>
            <li>Technology array</li>
            <li onClick={() => scrollToId('experience')}>Experience</li>
            <li onClick={() => scrollToId('education')}>Education</li>
          </ul>

          <Tag
            size={'md'}
            variant={'subtle'}
            colorScheme={'blackAlpha'}
            mt={4}
            cursor={'default'}
          >
            <TagLabel>Resume</TagLabel>
            <ChakraNextLink href="">
              <Tooltip label="Open in new tab">
                <TagRightIcon as={ExternalLinkIcon} boxSize={5} />
              </Tooltip>
            </ChakraNextLink>
            <ChakraNextLink href="">
              <Tooltip label="Download">
                <TagRightIcon as={DownloadIcon} boxSize={5} />
              </Tooltip>
            </ChakraNextLink>
          </Tag>
        </Flex>
      </Flex>
      <Divider mb={10} />

      {/* The two cards */}
      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        w={'100%'}
        justify={'center'}
        align={{ base: 'center', md: 'flex-start' }}
      >
        {/* Personal links */}
        <Card heading="Links">
          <UnorderedList mb={{ base: 8, md: 0 }}>
            {linksConstants.map((link) => {
              return (
                <ListItem key={link.name} py={1}>
                  {link.name}:{' '}
                  <ChakraNextLink
                    href={link.url}
                    isExternal
                    color={'telegram.500'}
                    fontWeight={'medium'}
                  >
                    {link.display} <ExternalLinkIcon mx={'1px'} mb={1} />
                  </ChakraNextLink>
                </ListItem>
              )
            })}
          </UnorderedList>
        </Card>

        <Divider orientation="vertical" />

        {/* Meeting */}
        <Card heading="Contact">
          <Text mb={4}>
            Want to hear more about me, hire me, or simply have a chat?
          </Text>
          <Button
            rightIcon={<BsFillCalendar2EventFill />}
            colorScheme={'telegram'}
            variant={'outline'}
            onClick={meetingModalHandler}
          >
            Arrange a meeting
          </Button>
          <ContactModal
            isOpen={contactModal}
            closeModal={() => setContactModal(false)}
          />
        </Card>
      </Flex>
      <Divider mb={6} />

      <Flex flexDirection={'column'} alignItems={'center'} py={10}>
        <Heading as={'h3'} fontSize={'x-large'} id="tech-matrix">
          My frequently used technologies:
        </Heading>
        <SimpleGrid
          mt={10}
          columns={{ base: 1, md: 2 }}
          spacingX={1}
          spacingY={10}
          w={'100%'}
        >
          {gridWithTitle('Programming Languages', ABOUT_PAGE_LANGUAGES)}
          {gridWithTitle('Frameworks & Libraries', ABOUT_PAGE_FRAMEWORKS)}
          {gridWithTitle('Tools', ABOUT_PAGE_TOOLS)}
          {gridWithTitle('Other  & Miscellanious', ABOUT_PAGE_LIBRARIES)}
        </SimpleGrid>
      </Flex>

      <Accordion allowToggle defaultIndex={[0]}>
        <AccordionItem>
          <Flex flexDir={'column'} px={{ md: 0 }}>
            <AccordionButton px={0}>
              <Heading as={'h4'} size={'md'} flex={1} textAlign={'left'}>
                Tech tags
              </Heading>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel px={0}>
              <Flex flexWrap={'wrap'} my={3}>
                <TechTags
                  techArray={FULL_ARRAY}
                  hoveredTech={hoveredTech}
                  hoverHandler={hoverHandler}
                />
              </Flex>
            </AccordionPanel>
          </Flex>
        </AccordionItem>
      </Accordion>

      <Flex flexDir={'column'} mt={16}>
        <Heading as={'h4'} fontSize="x-large" id={'experience'}>
          Experience
        </Heading>
        {workExperience.map((work) => (
          <React.Fragment key={work.role}>
            <WorkExperience work={work} />
            <Divider />{' '}
          </React.Fragment>
        ))}
        <ChakraNextLinkButton
          href="/experience"
          textAlign={'center'}
          mt={4}
          variant={'link'}
          rightIcon={<ArrowForwardIcon />}
        >
          View my experience in detail
        </ChakraNextLinkButton>
      </Flex>

      <EducationPanel />
    </Container>
  )
}
