import Button from '../../Button'
import { RegisterStyle, RegisterContainer } from './styles'

export default function RegisterPage () {
  const onSubmit = (data) => console.log(data)

  return (
    <RegisterStyle>
      <RegisterContainer>
        <h1>Insira seus dados</h1>

        <form onSubmit={() => onSubmit}>
          <label>Nome</label>
          <input type="text" className="name" />
          <br/>

          <label>Email</label>
          <input type="text" className="email" />
          <br/>

          <label>Senha</label>
          <input type="text" className="senha" />

          <Button
            type='submit'
            padding='10px'
            margin='10px 0'
            backgroundColor='#109648'
          >
            Submeter
          </Button>
        </form>
      </RegisterContainer>
    </RegisterStyle>
  )
}
