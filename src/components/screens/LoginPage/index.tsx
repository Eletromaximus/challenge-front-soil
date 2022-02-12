import Link from '../../Link'
import { LoginPageStyle, LoginContainer } from './styles'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { api } from '../../../services/api'
import Button from '../../Button'

interface Inputs {
  name: string,
  password: string,
  email: string
}

export default function LoginPage () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const router = useRouter()

  async function onSubmit (data) {
    try {
      const response = await api.post('/login', data)

      if (response.status === 201) {
        return router.push('/lists')
      }
    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <LoginPageStyle>
      <LoginContainer onSubmit={handleSubmit(onSubmit)}>
        <h2>Faça o seu Login!</h2>

        <label>Nome</label>
        <input {...register('name')}/>
        {errors.name && <p>{errors.name}</p> }

        <label>Email</label>
        <input {...register('email')}/>
        {errors.email && <p>{errors.email}</p> }

        <label>Senha</label>
        <input {...register('password')}/>
        {errors.password && <p>{errors.password}</p> }

        <Button
          margin='10px 0 0 0'
          backgroundColor='#109648'
          color='white'
        >
          Confirmar
        </Button>

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
