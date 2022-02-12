import Button from '../../Button'
import { RegisterStyle, RegisterContainer } from './styles'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { api } from '../../../services/api'

interface Inputs {
  name: string,
  password: string,
  email: string
}

export default function RegisterPage () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  const router = useRouter()

  async function onSubmit (data: any) {
    try {
      const response = await api.post('/users', data)

      if (response.status === 201) {
        localStorage.setItem('login', data)

        router.push('/')
      }
    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <RegisterStyle>
      <RegisterContainer >
        <h1>Insira seus dados</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nome</label>
        <input {...register('name')}/>
        {errors.name && <p>{errors.name}</p> }

        <label>Email</label>
        <input {...register('email')}/>
        {errors.email && <p>{errors.email}</p> }

        <label>Senha</label>
        <input {...register('password')}/>

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
