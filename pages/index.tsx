import { chakra, Flex, Heading, Image, Text, Button } from '@chakra-ui/react'
import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Container from '../components/Container/Container'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import TechnologiesGrid from '../components/TechnologiesGrid/TechnologiesGrid'
import { HOME_PAGE_TECH_STACKS } from '../constants/technologyConstants'
import { useState } from 'react'
import ContactModal from '../components/ContactModal/ContactModal'
import ChakraNextLinkButton from '../components/ChakraNextLink/ChakraNextLinkButton'
import ChakraNextLink from '../components/ChakraNextLink/ChakraNextLink'

const Home: NextPage = () => {
  const [contactModal, setContactModal] = useState(false)

  return (
    <div>
      <Container>
        <Flex
          className={styles.bioContainer}
          flexDir={'column'}
          alignItems={'center'}
          justify={'center'}
        >
          <Flex
            flexDir={'column'}
            alignItems={'center'}
            py={10}
            // mt={{ md: -20 }}
            h={'40%'}
            justify={'space-evenly'}
          >
            <Image
              // className={isDark && 'grayscale'}
              src="/uglyme.png"
              boxSize={{ base: '120px', md: '160px' }}
              alt="te"
              borderRadius={'full'}
            />
            {/* <Avatar src="/avatar.jpg" alt="Nelson Ha" width={120} height={120} borderRadius="full" /> */}
            <Heading as={'h1'} size={'3xl'} textAlign={'center'}>
              Nelson Ha
            </Heading>
            <Heading
              as={'h2'}
              fontSize={{ base: 'sm', md: 'md' }}
              fontWeight={'normal'}
              opacity={0.95}
              textAlign={'center'}
            >
              Software Engineer at{' '}
              <chakra.span fontWeight={'semibold'}>
                Commonwealth Bank
              </chakra.span>
              <Image
                src="/cba.svg"
                boxSize={{ base: 10, md: 14 }}
                alt=""
                display={'inline'}
                verticalAlign={'middle'}
                mb={'10px'}
              />
            </Heading>
          </Flex>
          <Text maxW={'75%'}>
            I&apos;m a full-stack software engineer with 3 years experience
            currently working at Commonwealth Bank.{' '}
            <ChakraNextLinkButton
              href={'/about'}
              variant="link"
              rightIcon={<ArrowForwardIcon />}
            >
              Learn more about me
            </ChakraNextLinkButton>
          </Text>
          <Flex mt={12}>
            <Button variant={'ghost'} onClick={() => setContactModal(true)}>
              Contact Me
            </Button>
            <ContactModal
              isOpen={contactModal}
              closeModal={() => setContactModal(false)}
            />
            <Button variant={'solid'}>Whatsapp phone?</Button>
          </Flex>
        </Flex>
        <Flex
          flexDir={'column'}
          alignItems={'center'}
          justify={'space-between'}
          py={4}
          mt={10}
        >
          <Heading as={'h3'} size={'md'} mb={6} textAlign="center">
            Some of my favourite technologies
          </Heading>
          <TechnologiesGrid
            iconArray={HOME_PAGE_TECH_STACKS}
            iconSize={10}
            gridGap={'5'}
          />
          <Button
            variant={'link'}
            color="burlywood"
            rightIcon={<ArrowForwardIcon />}
            mt={3}
          >
            <ChakraNextLink href="/about">
              {' '}
              See my full set of skills{' '}
            </ChakraNextLink>
          </Button>
        </Flex>
      </Container>
    </div>
  )
}

export default Home
