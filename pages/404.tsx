import { Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import Container from '../components/Container/Container'
import ChakraNextLinkButton from '../components/ChakraNextLink/ChakraNextLinkButton'
import { ArrowBackIcon } from '@chakra-ui/icons'

export default function Custom404() {
  const router = useRouter()

  return (
    <Container>
      <Heading>There is nothing here yet 🙁</Heading>
      <ChakraNextLinkButton
        href={''}
        leftIcon={<ArrowBackIcon />}
        onClick={() => {
          router.back()
        }}
      >
        Go back
      </ChakraNextLinkButton>
    </Container>
  )
}
