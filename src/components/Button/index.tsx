import { ReactNode } from 'react'
import { ButtonStyle } from './styles'

interface IButton {
  children: ReactNode,
  color?: string,
  padding?: string,
  margin?: string,
  backgroundColor?: string
  borderRadius?: string,
  type: 'button' | 'submit' | 'reset',
  border: 'string',
  onClick?: () => void
}

export default function Button ({ children, ...props }: IButton) {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  )
}

Button.defaultProps = {
  type: 'transparent',
  border: 'none'
}
