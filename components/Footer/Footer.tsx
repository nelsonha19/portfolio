import { Icon, Flex, Text, Divider } from '@chakra-ui/react'
import React, { useMemo } from 'react'
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import ChakraNextLink from '../ChakraNextLink/ChakraNextLink'
import styles from './Footer.module.scss'

export default function Footer() {
  const socials = useMemo(
    () => [
      {
        id: 'linkedin-link',
        url: 'https://www.linkedin.com/in/nelson-ha-3743b7117/',
        icon: AiFillLinkedin,
      },
      {
        id: 'github-link',
        url: 'https://github.com/nelsonha19',
        icon: AiFillGithub,
      },
      {
        id: 'twitter-link',
        url: 'https://twitter.com/adaywithnelson',
        icon: AiFillTwitterSquare,
      },
      {
        id: 'email-link',
        url: 'mailto:nelsonha19@gmail.com',
        icon: MdEmail,
      },
    ],
    []
  )

  return (
    <Flex
      className={`${styles.footerContainer}`}
      my={{ base: 10, md: 25 }}
      pb={6}
      flexDir={'column'}
      alignItems={'center'}
    >
      <Divider opacity={1} mb={3} />
      <Flex my={3}>
        {socials.map(({ id, url, icon }) => (
          <ChakraNextLink key={id} target={'_blank'} href={url} mx={2}>
            <Icon id={id} as={icon} boxSize={'6'} />
          </ChakraNextLink>
        ))}
      </Flex>
      <Text fontSize={14} letterSpacing={'tight'}>
        © {new Date().getFullYear()} Nelson Ha - Powered with ❤️
      </Text>
    </Flex>
  )
}
