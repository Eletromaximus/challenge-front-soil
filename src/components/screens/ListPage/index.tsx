/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form'
import { api } from '../../../services/api'
import { CardMeals, Container } from './styles'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '../../Button'
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

export default function () {
  const [listMeals, setListMeals] = useState<Inputs[] | []>([])

  async function apiLoading (
    email: string = 'maxmillianox@gmail.com',
    advance?: number,
    column?: string,
    direction?: string
  ) {
    setListMeals(
      await api.post('/listmeals', {
        email,
        advance,
        column,
        direction
      })
        .then((data: any) => {
          console.log(data.data.length)
          return data.data
        }).catch((error) => {
          console.log(error)
          return undefined
        })
    )
  }

  async function Del (id:string) {
    await api.delete('/delmeal', {
      data: {
        id
      }
    })
      .then(() => {
        console.log('ok')
        apiLoading()
      }).catch(() => {
        alert('Falha ao deletar')
      })
  }

  useEffect(() => {
    try {
      apiLoading()
    } catch (error: any) {
      console.log(error)
    }
  }, [])

  const onSubmit: SubmitHandler<Inputs> = async (dataSubmit: Inputs) => {
    console.log(dataSubmit)
    await api.post('/meals', dataSubmit)
      .then((data) => {
        console.log(data)
        apiLoading()
      }).catch((error) => {
        alert(`Preencha os dados devidamente ${error.message}`)
      })
  }

  return (
      <Container>
        {/* <nav>

        </nav> */}

        <FormItem onSubmit={onSubmit} />

        {listMeals && listMeals.length > 0 && listMeals.map((meal) => {
          return <CardMeals key={meal.id}>
            <p><b>name: </b>{meal.name}</p>

            <p><b>data: </b> {meal.data}</p>

            <p><b>Carboidratos: </b>{meal.gramsCarboidratos}g</p>

            <p><b>Verduras: </b>{meal.gramsVegetais}g</p>

            <p><b>Proteina: </b>{meal.gramsProteinas}g</p>

            <Button
              onClick={() => Del(meal.id)}
            >
              <DeleteIcon />
            </Button>
          </CardMeals>
        })}
      </Container>
  )
}
