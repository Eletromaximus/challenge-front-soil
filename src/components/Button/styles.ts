import styled from 'styled-components'
import propToStyle from '../../utils/propToStyle'

interface IButton {
  color?: string,
  padding?: string,
  backgroundColor?: string,
  borderRadius?: string
}

export const ButtonStyle = styled.div<IButton>`
  ${propToStyle('color')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('borderRadius')}
`
