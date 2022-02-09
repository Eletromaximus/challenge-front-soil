import Link from '../../Link'
import { LoginPageStyle, LoginContainer } from './styles'

export default function LoginPage () {
  return (
    <LoginPageStyle>
      <LoginContainer>
        <h2>Faça o seu Login!</h2>

        <label>Nome</label>
        <input type='text' id='name'/>

        <label>Senha</label>
        <input type='text' id='senha'/>

        <hr />

        <h2>Não está cadastrado?</h2>
        <h3>Entre agora agora e controle sua alimentação!</h3>
        <h4>Para que ela não controle você</h4>

        <Link
          backgroundColor='#109648'
          padding='10px'
          borderRadius='5px'
          href='/register'
        >
          Cadastre-se
        </Link>
      </LoginContainer>
    </LoginPageStyle>
  )
}
