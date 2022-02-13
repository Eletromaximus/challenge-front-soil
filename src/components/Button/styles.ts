import styled from 'styled-components'
import propToStyle from '../../utils/propToStyle'

interface IButton {
  color?: string,
  padding?: string,
  margin?: string,
  backgroundColor?: string
  borderRadius?: string,
  type: 'button' | 'submit' | 'reset',
  border: 'string'
}

export const ButtonStyle = styled.button<IButton>`
  cursor: pointer;

  ${propToStyle('color')}
  ${propToStyle('backgroundColor')}
  ${propToStyle('padding')}
  ${propToStyle('margin')}
  ${propToStyle('borderRadius')}
  ${propToStyle('border')}
  ${propToStyle('type')}

`
