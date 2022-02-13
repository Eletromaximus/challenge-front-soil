import { ReactNode } from 'react'
import { LinkStyle } from './styles'
import NextLink from 'next/link'

interface ILink {
  children: ReactNode,
  color?: string,
  padding?: string,
  margin?: string,
  backgroundColor?: string,
  borderRadius?: string,
  href: string
}

export default function Link ({ children, ...props }: ILink) {
  return (
    <NextLink href={props.href} passHref>
      <LinkStyle {...props}>
        {children}
      </LinkStyle>
    </NextLink>
  )
}
