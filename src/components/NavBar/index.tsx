import { Links, LogoStyle, NavStyle } from './styles'
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
        <Link
          href='/'
        >
          <h2>
            Projeto Shape
          </h2>
        </Link>
      </LogoStyle>

      <Links>
        <Link
          href='/scheduling'
          color='white'
          padding='10px'
          backgroundColor='green'
          margin='0 10px 0 0'
        >
          <b>Agendamento</b>
        </Link>

        <Link
          href='/lists'
          color='white'
          padding='10px'
          backgroundColor='green'
          margin='0 10px 0 0'
        >
          <b>Listagem</b>
        </Link>
      </Links>

    </NavStyle>
  )
}
