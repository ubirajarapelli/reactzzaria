import React, { useState } from 'react'
import t from 'prop-types'
import { Link, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import {
  Button,
  Input as MatInput
} from '@material-ui/core'
import { Content, Footer, H4, HeaderContent } from 'ui'
import { HOME, CHECKOUT } from 'routes'
import { useOrder } from 'hooks'

const ChoosePizzaQuantity = ({ location }) => {
  const [quantity, setQuantity] = useState(1)
  const { addPizzaToOrder } = useOrder()

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange (e) {
    const { value } = e.target

    if (value >= 1) {
      setQuantity(value)
    }
  }

  function addPizza () {
    addPizzaToOrder({
      // size: location.state.pizzaSize.id,
      // flavours: location.state.pizzaFlavours.map(f => f.id),
      ...location.state,
      quantity
    })
  }

  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            Quantas pizzas você gostaria<br />
            de pedir, com esses sabores?
          </H4>
        </HeaderContent>
        <MainContent>
          <Input
            value={quantity}
            onChange={handleChange}
            autoFocus
          />
          <ButtonAddPizza to={HOME} onClick={addPizza}>
            Adicionar e<br />montar outra
          </ButtonAddPizza>
        </MainContent>
      </Content>
      <Footer buttons={{
        back: {
          children: 'Mudar sabores'
        },
        action: {
          to: CHECKOUT,
          onClick: addPizza,
          children: 'Finalizar pedido'
        }
      }} />
    </>
  )
}

const MainContent = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing(2)}px;
`
const Input = styled(MatInput).attrs({
  type: 'number'
})`
  && {
    margin-bottom: ${({ theme }) => theme.spacing(3)}px
  }
  & input {
    width: 150px;
    padding: 10px;
    text-align: center;
    font-size: 80px;
  }
`
const ButtonAddPizza = styled(Button).attrs({
  color: 'secondary',
  component: Link,
  variant: 'contained'
})`
  && {
    text-align: center;
  }
`
ChoosePizzaQuantity.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaQuantity
