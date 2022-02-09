import { ReactNode } from 'react'
import { ButtonStyle } from './styles'

interface IButton {
  children: ReactNode,
  color?: string,
  padding?: string,
  margin?: string,
  backgroundColor?: string
  borderRadius?: string,
  type?: string
}

export default function Button ({ children, ...props }: IButton) {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  )
}
