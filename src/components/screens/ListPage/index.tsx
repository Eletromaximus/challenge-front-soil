import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { CardMeals, Container } from './styles'

export default function () {
  const [listMeals, setListMeals] = useState([])

  async function apiLoading () {
    setListMeals(
      await api.get('/listmeals')
        .then((data) => {
          console.log(data)
          return data
        }).catch((error) => {
          console.log(error)
          return undefined
        })
    )
  }
  useEffect(() => {
    apiLoading()
  }, [])

  return (
      <Container>
        <nav>

        </nav>
        {listMeals && listMeals.map(meal => {
          return <CardMeals key={meal.id}>
            name: {meal.name}
            data: {meal.data}
          </CardMeals>
        })}
      </Container>
  )
}
