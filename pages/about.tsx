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
  Switch,
  FormControl,
  FormLabel,
  Fade,
  SlideFade,
} from '@chakra-ui/react'
import React, { useMemo, useState } from 'react'
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
  ABOUT_PAGE_CLOUD,
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
import TechList from '../components/TechList/TechList'
import SlideFadeContainer from '../components/Container/SlideFadeContainer'

export default function About() {
  const [contactModal, setContactModal] = useState(false)
  const [hoveredTech, setHoveredTech] = useState('')
  const [isListView, setIsListView] = useState(false)

  const meetingModalHandler = () => {
    setContactModal(!contactModal)
  }

  const hoverHandler = (techName: string) => {
    setHoveredTech(techName)
  }

  const gridWithTitle = (title: string, arrayOfTech: techArrayType[]) => {
    return (
      <Flex
        display={{ base: 'none', md: 'flex' }}
        flexDir={'column'}
        align={'center'}
        justifyContent={'space-between'}
      >
        <Heading size={'sm'} fontWeight={'medium'} my={3}>
          {title}
        </Heading>
        <TechnologiesGrid
          usesSvg
          columns={{ base: 5, sm: 6, md: 5 }}
          iconArray={arrayOfTech}
          iconSize={16}
          gridGap={2}
          hoverHandler={hoverHandler}
          hoveredTech={hoveredTech}
        />
        <Divider mt={1} display={{ base: 'none', md: 'unset' }} />
      </Flex>
    )
  }
  const techAccordionItemMobile = (
    title: string,
    arrayOfTech: techArrayType[]
  ) => {
    return (
      <AccordionItem display={{ md: 'none' }}>
        <Flex flexDir={'column'} px={{ md: 0 }}>
          <AccordionButton px={0}>
            <Heading as={'h4'} size={'sm'} flex={1} textAlign={'left'}>
              {title}
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel px={0}>
            <TechnologiesGrid
              usesSvg
              columns={{ base: 5, sm: 6, md: 5 }}
              iconArray={arrayOfTech}
              iconSize={16}
              gridGap={2}
              hoverHandler={hoverHandler}
              hoveredTech={hoveredTech}
            />
          </AccordionPanel>
        </Flex>
      </AccordionItem>
    )
  }

  return (
    <Container title="About Me - Nelson Ha">
      <SlideFadeContainer>
        <Flex
          my={10}
          flexDir={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          <Flex
            px={{ md: 6 }}
            justify="center"
            minW={'35%'}
            maxW={{ md: '35%' }}
          >
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
              I am a software engineer based in Sydney, Australia, with a
              passion for full-stack development. With a comprehensive skill set
              and a broad range of experience, I excel in delivering end-to-end
              engineering solutions. From crafting intuitive user interfaces to
              building robust backend systems, I thrive in every aspect of
              software engineering. My dedication to producing high-quality
              code, coupled with my familiarity with various technologies,
              allows me to create seamless and efficient solutions for complex
              problems.
            </Text>

            <ChakraNextLink href="#" color="telegram.500">
              Resume
              <Tooltip label="Download">
                <DownloadIcon mx={3} />
              </Tooltip>
            </ChakraNextLink>
          </Flex>
        </Flex>

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

          {/* Contact */}
          <Card heading="Contact">
            <Text mb={4}>
              Interested in learning more about me, hiring me, or simply having
              a chat? Don't hesitate to reach out: Email: contact@nelsonha.io
              Phone: [+1234567890] Alternatively, you can use the contact form
              on my website to get in touch.
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

        <Flex
          flexDirection={'column'}
          alignItems={'center'}
          my={6}
          position={'relative'}
        >
          <Flex
            flexDirection="row"
            w={'100%'}
            justifyContent={{ sm: 'space-evenly', md: 'center' }}
          >
            <Heading as={'h3'} fontSize={'x-large'} id="tech-matrix">
              Technology Stack
            </Heading>{' '}
            <Flex
              flexDirection={'row'}
              alignItems="center"
              position={'absolute'}
              right={0}
              top={1}
            >
              <FormLabel htmlFor="use-list" mb="0" mr={1}>
                List view
              </FormLabel>
              <Switch
                id="use-list"
                isChecked={isListView}
                onChange={() => {
                  setIsListView(!isListView)
                }}
              />
            </Flex>
          </Flex>
          {isListView ? (
            <SlideFadeContainer>
              <TechList />
            </SlideFadeContainer>
          ) : (
            <SimpleGrid
              mt={{ base: 0, md: 8 }}
              columns={{ base: 1, md: 2 }}
              spacingX={1}
              spacingY={10}
              w={'100%'}
            >
              {gridWithTitle('Programming Languages', ABOUT_PAGE_LANGUAGES)}
              {gridWithTitle('Frameworks & Libraries', ABOUT_PAGE_FRAMEWORKS)}
              {gridWithTitle('Development tools', ABOUT_PAGE_TOOLS)}
              {gridWithTitle('Cloud & Infrastructure', ABOUT_PAGE_LIBRARIES)}
            </SimpleGrid>
          )}
        </Flex>

        <Accordion allowToggle allowMultiple defaultIndex={[0, 1, 2, 3]}>
          <AccordionItem>
            {techAccordionItemMobile(
              'Programming Languages',
              ABOUT_PAGE_LANGUAGES
            )}
            {techAccordionItemMobile(
              'Frameworks & Libraries',
              ABOUT_PAGE_FRAMEWORKS
            )}
            {techAccordionItemMobile('Development tools', ABOUT_PAGE_TOOLS)}
            {techAccordionItemMobile(
              'Cloud & Infrastructure',
              ABOUT_PAGE_CLOUD
            )}
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
      </SlideFadeContainer>
    </Container>
  )
}
