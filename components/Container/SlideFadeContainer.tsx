import { SlideFade } from '@chakra-ui/react'
import React from 'react'

type Props = { children: React.ReactNode }

export default function SlideFadeContainer(props: Props) {
  return (
    <SlideFade in={true} offsetY={'30px'}>
      {props.children}
    </SlideFade>
  )
}
