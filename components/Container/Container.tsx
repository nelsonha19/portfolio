import { Fade, Flex, useDisclosure, chakra } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Container(props: Props) {
  const { isOpen, onToggle } = useDisclosure()

  const { children, title } = props
  const router = useRouter()
  const meta = {
    title: title || 'Nelson Ha',
    description: 'Software engineer, sports person, etc based in Sydney',
  }

  return (
    <Fade in={true}>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <link rel="canonical" href={`https://nelsonha.io${router.asPath}`} />
      </Head>

      <chakra.div
        mx={{ base: 0, md: 8 }}
        display={'flex'}
        flexDir={'column'}
        h={'100vh'}
        justifyContent="space-between"
      >
        <Header onToggle={onToggle} />
        <Fade in={!isOpen}>
          <Flex justify={'center'}>
            <chakra.div w="100%" maxW={'4xl'}>
              {children}
            </chakra.div>
          </Flex>
        </Fade>
        <Footer />
      </chakra.div>
    </Fade>
  )
}
