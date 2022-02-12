/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import { api } from '../../../services/api'
import { AddItem, CardMeals, Container } from './styles'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Button from '../../Button'

export default function () {
  const [listMeals, setListMeals] = useState([])
  const [date, setDate] = useState('')

  useEffect(() => {
    apiLoading()
  }, [])

  useEffect(() => {
    console.log(date)
  }, [date])

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
  function handleInput (e: React.FormEvent<HTMLInputElement>) {
    setDate(e.currentTarget.value)
  }
  const onSubmit = (info: React.SyntheticEvent) => {
    info.preventDefault()
    console.log(info)
  }

  return (
      <Container>
        {/* <nav>

        </nav> */}

        <AddItem onSubmit={onSubmit}>
          <input
            type="datetime-local"
            name="data"
            id="data"
            value={date}
            onChange={(e) => handleInput(e)}
          />
          <input type="text" />
          <Button ><AddCircleIcon /></Button>
        </AddItem>

        {listMeals && listMeals.map(meal => {
          return <CardMeals key={meal.id}>
            name: {meal.name}
            data: {meal.data}
          </CardMeals>
        })}
      </Container>
  )
}
