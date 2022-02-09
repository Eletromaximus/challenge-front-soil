import { LogoStyle, NavStyle } from './styles'
import Image from 'next/image'
import Link from '../Link'

export default function NavBar () {
  return (
    <NavStyle>
      <LogoStyle>
        <Image
          src='/haltere.png'
          alt="logo"
          width='64px'
          height='64px'
          layout='intrinsic'
        />
      </LogoStyle>

      <Link
        href='/'
      >
        <h2>
          Projeto Shape
        </h2>
      </Link>
    </NavStyle>
  )
}
