import { ReactNode } from 'react'
import Footer from '../../Footer'
import NavBar from '../../NavBar'
import SEO from '../../SEO'

interface IWebPageWrapper {
  children: ReactNode
}

export default function WebPageWrapper ({ children }: IWebPageWrapper) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
    <SEO />

    <NavBar />

    <Footer />
  </div>
  )
}
