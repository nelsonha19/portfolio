import React from 'react'
import { useRouter } from 'next/router'
import ChakraNextLink from '../ChakraNextLink/ChakraNextLink'

type Props = {
  href: string
  text: string
}

export default function NavLink({ href, text }: Props) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <ChakraNextLink
      href={href}
      fontWeight={isActive ? 'semibold' : 'normal'}
      _focus={{ outline: 'none' }}
      display={{ base: 'none', md: 'inline-block' }}
      _hover={{ textDecoration: isActive ? 'none' : 'underline' }}
      p={1}
      px={{ sm: 3 }}
      py={{ sm: 2 }}
    >
      <span className="capsize">{text}</span>
    </ChakraNextLink>
  )
}
