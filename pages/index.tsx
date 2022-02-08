import Footer from '../src/components/Footer'
import NavBar from '../src/components/NavBar'
import LoginPage from '../src/components/screens/LoginPage'
import SEO from '../src/components/SEO'

export default function Home () {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%'
    }}>
      <SEO />

      <NavBar />

      <LoginPage />

      <Footer />
    </div>
  )
}
