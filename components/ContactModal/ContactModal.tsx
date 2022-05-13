import { Button, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spinner, Text, Textarea, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react';

type Props = {
    isOpen: boolean,
    closeModal: () => void
};

export default function ContactModal(props: Props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)
  
    const isError = name === ''

	return <>
        <Modal isOpen={props.isOpen} onClose={props.closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Arrange a meeting</ModalHeader>
          <ModalCloseButton />
          {!loading ? <ModalBody>
              <Text>Send me an email here: nelsonha19@gmail.com</Text>
              <Divider/>
              <Text>Or leave me a message :)</Text>
              <FormControl isInvalid={isError}>
      <FormLabel htmlFor='email'>Name</FormLabel>
      <Input
        id='name'
        type='name'
        value={name}
        placeholder={'name'}
        onChange={handleNameChange}
      />
        {!isError ? (
        <FormHelperText>
          Enter ur name so I know who&apos;s contacting me!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Name is required.</FormErrorMessage>
      )}
      <FormLabel htmlFor='email'>Email</FormLabel>
      <Input
        id='email'
        type='email'
        value={email}
        onChange={handleEmailChange}
      />
      {!isError ? (
        <FormHelperText>
          Enter the email so I know who&apos;s contacting me!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
      <FormLabel htmlFor='message'>Message</FormLabel>
      <Textarea
        id='message'
        value={message}
        onChange={handleMessageChange}
      />
      {!isError ? (
        <FormHelperText>
          What do you want to say?
        </FormHelperText>
      ) : (
        <FormErrorMessage>Leave me something at least!</FormErrorMessage>
      )}
    </FormControl>
          </ModalBody> : <ModalBody>
              <Spinner />
              </ModalBody>}

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={props.closeModal}>
              Close
            </Button>
            <Button variant='ghost' onClick={() => {setLoading(!loading)}}>Send</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
}
