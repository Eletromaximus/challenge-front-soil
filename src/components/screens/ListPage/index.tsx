import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import Button from '../../Button'
import { Container, CardMeals } from './styles'

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

export default function ListPage () {
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

  useEffect(() => {
    try {
      apiLoading()
    } catch (error: any) {
      console.log(error)
    }
  }, [])

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

  return (
    <Container>
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
