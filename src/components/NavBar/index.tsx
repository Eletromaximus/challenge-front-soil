import { NavStyle } from './styles'
import Image from 'next/image'

export default function NavBar () {
  return (
    <NavStyle>
      <div className='logo'>
        <Image
          src='/haltere.png'
          alt="logo"
          width='64px'
          height='64px'
          layout='fixed'
        />
      </div>
      Projeto Shape
    </NavStyle>
  )
}
