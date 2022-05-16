import {
  Flex,
  chakra,
  Button,
  useColorMode,
  Tooltip,
  useToast,
  useColorModeValue,
  Tag,
  TagLabel,
  TagRightIcon,
} from '@chakra-ui/react'
import { SunIcon, MoonIcon, CopyIcon } from '@chakra-ui/icons'
import React from 'react'
import NavLink from '../NavLink/NavLink'
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu'

type Props = {
  onToggle: () => void
}

export default function Header(props: Props) {
  const { colorMode, toggleColorMode: toggle } = useColorMode()
  const themeColor = useColorModeValue('dark', 'light')

  const toast = useToast()

  const copyEmailHandler = () => {
    const email = document.getElementById('email')?.innerText || ''
    navigator.clipboard.writeText(email)
    toast({
      title: 'Copied to clipboard',
      status: 'info',
      duration: 3000,
      isClosable: false,
    })
  }

  const toggleColorMode = () => {
    toggle()
    toast({
      title: `Switched to ${themeColor} mode`,
      status: 'success',
      duration: 2000,
    })
  }

  return (
    <Flex {...props} justify={'center'}>
      <chakra.nav
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        w="100%"
        maxW={'4xl'}
        position={'relative'}
        pt={8}
      >
        <chakra.div>
          <HamburgerMenu onToggle={props.onToggle} />
          <NavLink href="/" text="Home" />
          <NavLink href="/about" text="About" />
          <NavLink href="/experience" text="Experience" />
          {/* <NavLink href="/apps" text="Apps" /> */}
        </chakra.div>
        <chakra.div>
          <Flex alignItems={'center'}>
            <Tag
              size={'md'}
              variant={'subtle'}
              colorScheme={'gray'}
              py={2}
              cursor={'default'}
            >
              <TagLabel id={'email'}>nelsonha19@gmail.com</TagLabel>
              <Tooltip label="Copy to clipboard">
                <TagRightIcon
                  as={CopyIcon}
                  boxSize={5}
                  onClick={copyEmailHandler}
                  _hover={{ opacity: 0.5 }}
                  cursor={'pointer'}
                />
              </Tooltip>
            </Tag>

            <Tooltip label={`Toggle ${themeColor} mode`} openDelay={300}>
              <Button
                id={'email'}
                colorScheme={colorMode === 'light' ? 'gray' : 'whiteAlpha'}
                onClick={toggleColorMode}
                fontSize={'smaller'}
                color={colorMode === 'light' ? 'black' : 'yellow.300'}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Tooltip>
          </Flex>
        </chakra.div>
      </chakra.nav>
    </Flex>
  )
}
