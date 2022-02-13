import { SubmitHandler, useForm } from 'react-hook-form'
import Button from '../Button'
import { FormItemStyle } from './styles'
import AddCircleIcon from '@mui/icons-material/AddCircle'

interface Inputs {
  name: string,
  email: string,
  data: string,
  carboidratos: string,
  vegetais: string,
  proteinas: string,
  gramsProteinas: number,
  gramsVegetais: number,
  gramsCarboidratos: number,
  id?: string
}

interface IForm {
  onSubmit: SubmitHandler<Inputs>
}

export default function FormItem ({ onSubmit }: IForm) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>()

  return (
    <FormItemStyle onSubmit={handleSubmit(onSubmit)}>
      <label><b> Agende uma refeição começando pela data:</b></label>

      <input
        type="datetime-local"
        {...register('data', { required: true })}
      />
      {errors.data &&
        <p>{'Um horário válido é necessário'}</p>
      }

      <label>Nome:</label>

      <input
        {...register('name', { required: true })}
      />
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

      <input
        {...register('carboidratos')}
      />

      <label>Gramas de Carboidrato:</label>

      <input
        type='number' {...register('gramsCarboidratos')}
      />

      {errors.gramsCarboidratos &&
        <p>{'Insira um número vádido'}</p>
      }

      <label>Vegetais:</label>

      <input
        {...register('vegetais')}
      />

      <label>Gramas de Vegetais:</label>

      <input
        type='number'{...register('gramsVegetais')}
      />

      {errors.gramsVegetais &&
        <p>{'Insira um número vádido'}</p>
      }

      <label>Proteinas:</label>

      <input
        {...register('proteinas')}
      />

      <label>Gramas de Proteinas:</label>

      <input
        type='number' {...register('gramsProteinas')}
      />

      {errors.gramsProteinas &&
        <p>{'Insira um número vádido'}</p>
      }

      <Button >
        <AddCircleIcon />
      </Button>
    </FormItemStyle>

  )
}
