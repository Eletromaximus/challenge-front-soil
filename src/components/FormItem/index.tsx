import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button'
import { FormItemStyle } from './styles'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { api } from '../../services/api'

interface Inputs {
  name: string,
  email: string,
  data: string,
  carboidratos: string,
  verduras: string,
  proteinas: string,
  gramsProteinas: number,
  gramsVerduras: number,
  gramsCarboidratos: number,
  id?: string
}

export default function FormItem () {
  const defaultValues: Inputs = {
    name: '',
    data: '',
    email: '',
    carboidratos: '',
    verduras: '',
    proteinas: '',
    gramsCarboidratos: 0,
    gramsProteinas: 0,
    gramsVerduras: 0
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<Inputs>({
    defaultValues
  })

  const onSubmit: SubmitHandler<Inputs> = async (dataSubmit: Inputs) => {
    await api.post('/meals', dataSubmit)
      .then((data) => {
        console.log(data)
        alert('Dados preenchidos com sucesso')
        reset(defaultValues)
      }).catch((error) => {
        alert(`Preencha os dados devidamente ${error.message}`)
      })
  }

  return (
    <FormItemStyle
      onSubmit={handleSubmit(onSubmit)}
    >
      <label><b> Agende uma refeição começando pela data:</b></label>

      <input
        type="datetime-local"
        {...register('data', { required: true })}
      />
      {errors.data &&
        <p>{'Um horário válido é necessário'}</p>
      }

      <label>Nome:</label>

      <select
        {...register('name', { required: true })}
      >
        <option value="almoço">Almoço</option>
        <option value="café da manhã">Cafe da manhã</option>
        <option value="café da tarde">Cafe da tarde</option>
        <option value="ceia">Ceia</option>
        <option value="janta">Janta</option>
      </select>

      {errors.name &&
        <p>{'Um nome válido é necessário'}</p>
      }

        <label>Email:</label>

      <input
        {...register('email', {
          required: true,
          pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
        })}
      />
      {errors.email &&
        <p>{'Um email válido é necessário' + errors.email?.message}</p>
      }

      <label>Carboidratos:</label>

      <select
        {...register('carboidratos')}
      >
        <option value="arroz">Arroz</option>
        <option value="batata">Batata</option>
        <option value="inhame">Inhame</option>
        <option value="macarrão">Macarrão</option>
        <option value="pão">Pão</option>
      </select>

      <label>Gramas de Carboidrato:</label>

      <input
        type='number' {...register('gramsCarboidratos')}
      />

      {errors.gramsCarboidratos &&
        <p>{'Insira um número vádido'}</p>
      }

      <label>Verduras:</label>

      <select
        {...register('verduras')}
      >
        <option value="abobrinha">Abobrinha</option>
        <option value="berinjela">Berinjela</option>
        <option value="abóbora">Abóbora</option>
        <option value="almeirão">Almeirão</option>
      </select>

      <label>Gramas de verduras:</label>

      <input
        type='number'{...register('gramsVerduras')}
      />

      {errors.gramsVerduras &&
        <p>{'Insira um número vádido'}</p>
      }

      <label>Proteinas:</label>

      <select
        {...register('proteinas')}
      >
        <option value="peixe">Peixe</option>
        <option value="boi">Boi</option>
        <option value="porco">Porco</option>
        <option value="frango">Frango</option>
      </select>

      <label>Gramas de Proteinas:</label>

      <input
        type='number' {...register('gramsProteinas')}
      />

      {errors.gramsProteinas &&
        <p>{'Insira um número vádido'}</p>
      }

      <Button
        backgroundColor='transparent'
        margin='10px 0'
      >
        <AddCircleIcon />
      </Button>
    </FormItemStyle>

  )
}
