/* eslint-disable react/no-unescaped-entities */
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
      <Heading>404 - This page doesn't exist 🙁</Heading>
      <ChakraNextLinkButton
        href={''}
        leftIcon={<ArrowBackIcon />}
        my={4}
        onClick={() => {
          router.back()
        }}
      >
        Go back
      </ChakraNextLinkButton>
    </Container>
  )
}
