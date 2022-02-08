import { LogoStyle, NavStyle } from './styles'
import Image from 'next/image'

export default function NavBar () {
  return (
    <NavStyle>
      <LogoStyle>
        <Image
          src='/haltere.png'
          alt="logo"
          width='64px'
          height='64px'
          layout='fixed'
        />
      </LogoStyle>
      <p>
        <h2>
          Projeto Shape
        </h2>
      </p>
    </NavStyle>
  )
}
