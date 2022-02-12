import LoginPage from '../src/components/screens/LoginPage'
import HOC from '../src/components/wrappers/hoc'

export default function Home () {
  return (
    <HOC>
      <LoginPage />
    </HOC>
  )
}
