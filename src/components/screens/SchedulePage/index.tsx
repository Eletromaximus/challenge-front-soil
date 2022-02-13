/* eslint-disable no-undef */
import { SubmitHandler } from 'react-hook-form'
import { api } from '../../../services/api'
import { Container } from './styles'

import FormItem from '../../FormItem'

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

export default function SchedulePage () {
  const onSubmit: SubmitHandler<Inputs> = async (dataSubmit: Inputs) => {
    await api.post('/meals', dataSubmit)
      .then((data) => {
        console.log(data)
      }).catch((error) => {
        alert(`Preencha os dados devidamente ${error.message}`)
      })
  }

  return (
      <Container>

        <FormItem onSubmit={onSubmit} />

      </Container>
  )
}
