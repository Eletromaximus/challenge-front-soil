import styled, { css } from 'styled-components'
import breakpointsMedia from '../../../utils/breakpointsMedia'

export const CardMeals = styled.div`
width: 250px;
height: 300px;

background-color: white;
margin: 0 20px;

p {
  margin-left: 5px;
  margin-right: 5px;
}
`
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  padding: 0 16px;
  background-color: #A13409;
  
  ${breakpointsMedia({
    md: css`
      max-width: 0 ${(100 * 8) / 12}%
    `,
    sm: css`
      max-width: 0 ${(100 * 10) / 12}%
    `
  })}

  b {
    margin: 0 5px;
  }
`
