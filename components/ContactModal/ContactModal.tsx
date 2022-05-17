import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  Textarea,
} from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {
  isOpen: boolean
  closeModal: () => void
}

export default function ContactModal(props: Props) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [nameError, setNameErrorMessage] = useState('')
  const [emailError, setEmailErrorMessage] = useState('')
  const [messageError, setMessageErrorMessage] = useState('')

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value)
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value)
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value)

  const submitFormHandler = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (name.length <= 1) {
      setNameErrorMessage('False name')
    } else {
      setNameErrorMessage('')
    }
    if (email.length <= 1) {
      setEmailErrorMessage('Fake email')
    } else {
      setEmailErrorMessage('')
    }
    if (message.length <= 1) {
      setMessageErrorMessage('Too short')
    } else {
      setMessageErrorMessage('')
    }

    setLoading(false)
  }

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Arrange a meeting</ModalHeader>
          <ModalCloseButton />
          {!loading ? (
            <ModalBody>
              <Text>You can send me an email: nelsonha19@gmail.com</Text>

              <Divider my={10} />

              <Text>OR</Text>
              <Heading as={'h2'} mt={10} fontSize={'lg'}>
                Leave a message
              </Heading>
              <FormControl isRequired mt={4} isInvalid={nameError == ''}>
                <FormLabel htmlFor="email">Name</FormLabel>
                <Input
                  id="name"
                  type="name"
                  value={name}
                  placeholder={'John Smith'}
                  onChange={handleNameChange}
                />
                {nameError && <FormErrorMessage>{nameError}</FormErrorMessage>}
              </FormControl>

              <FormControl isRequired isInvalid={emailError == ''}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="johnsmith@email.com"
                  onChange={handleEmailChange}
                />
                {emailError && (
                  <FormErrorMessage>{emailError}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={messageError == ''}>
                <FormLabel htmlFor="message">Message</FormLabel>
                <Textarea
                  id="message"
                  value={message}
                  placeholder="..."
                  onChange={handleMessageChange}
                />
                {messageError && (
                  <FormErrorMessage>{messageError}</FormErrorMessage>
                )}
              </FormControl>
            </ModalBody>
          ) : (
            <ModalBody>
              <Spinner />
            </ModalBody>
          )}

          <ModalFooter>
            <Button
              colorScheme="blue"
              variant={'ghost'}
              mr={3}
              onClick={props.closeModal}
            >
              Close
            </Button>
            <Button
              onClick={submitFormHandler}
              // disabled
              colorScheme={'telegram'}
            >
              Send
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
