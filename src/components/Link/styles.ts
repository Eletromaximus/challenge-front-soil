import styled from 'styled-components'
import propToStyle from '../../utils/propToStyle'

interface ILink {
  color?: string,
  padding?: string,
  backgroundColor?: string,
  borderRadius?: string
}

export const LinkStyle = styled.a<ILink>`
  ${propToStyle('color')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('borderRadius')}
`
