import React, { useState } from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import {
  Card as MatCard,
  Grid,
  Typography
} from '@material-ui/core'
import { CardLink, Content, Divider, Footer, H4, HeaderContent, PizzaGrid } from 'ui'
import { HOME, CHOOSE_PIZZA_QUANTITY } from 'routes'
import { singularOrPlural, toMoney } from 'utils'

import pizzasFlavours from 'fake-data/pizzas-flavours'

const ChoosePizzaFlavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}))

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  const { flavours, id } = location.state.pizzaSize

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (
      checkboxesChecked(checkboxes).length === flavours &&
      e.target.checked === true
    ) {
      return
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    })
  }
  return (
    <>
      <Content>
        <HeaderContent>
          <H4>
            Escolha até {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')}
          </H4>
        </HeaderContent>
        <PizzaGrid>
          {pizzasFlavours.map((pizza) => (
            <Grid item xs key={pizza.id}>
              <Card checked={!!checkboxes[pizza.id]}>
                <CardLabel>
                  <Checkbox

                    checked={!!checkboxes[pizza.id]}
                    onChange={handleChangeCheckbox(pizza.id)}
                  />
                  <Img src={pizza.image} alt={pizza.name} />
                  <Divider />
                  <Typography>{pizza.name}</Typography>
                  <Typography variant='h5'>{toMoney(pizza.value[id])}</Typography>
                </CardLabel>
              </Card>
            </Grid>
          ))}
        </PizzaGrid>
      </Content>
      <Footer buttons={{
        back: {
          children: 'Mudar tamanho'
        },
        action: {
          to: {
            pathname: CHOOSE_PIZZA_QUANTITY,
            state: {
              ...location.state,
              pizzaFlavours: getFlavoursNameAndId(checkboxes)
            }
          },
          children: 'Quantas pizzas',
          disabled: checkboxesChecked(checkboxes).length === 0
        }
      }} />
    </>
  )
}

function checkboxesChecked (checkboxes) {
  return Object.values(checkboxes).filter(Boolean)
}

function getFlavoursNameAndId (checkboxes) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzasFlavours.find((flavour) => flavour.id === id).name
    }))
}

const Img = styled.img`
  width: 200px;
`
const Card = styled(MatCard)`
  && {
    border: 2px solid transparent;
    border-color: ${({ theme, checked }) => checked ? theme.palette.secondary.light : ''}
  }
`
const CardLabel = styled(CardLink).attrs({
  component: 'label'
})``

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none
`
ChoosePizzaFlavours.propTypes = {
  location: t.object.isRequired
}

export default ChoosePizzaFlavours
