import React from 'react'
import styled from 'styled-components'
import { Card, Grid, Typography } from '@material-ui/core'
import { CardLink, Content, Divider, H3, H4, HeaderContent, PizzaGrid } from 'ui'
import { useAuth } from 'hooks'
import { CHOOSE_PIZZA_FLAVOURS } from 'routes'
import { singularOrPlural } from 'utils'
import pizzaSizes from 'fake-data/pizza-sizes'

const ChoosePizzaSize = () => {
  const { userInfo } = useAuth()

  return (
    <Content>
      <HeaderContent>
        <H3>
          O que vai ser hoje, {userInfo.user.firstName}?
        </H3>
        <H4>
          Escolha o tamanho da Pizza:
        </H4>
      </HeaderContent>
      <PizzaGrid>
        {pizzaSizes.map((pizza) => (
          <Grid item xs key={pizza.id}>
            <Card>
              <CardLink to={{
                pathname: CHOOSE_PIZZA_FLAVOURS,
                state: {
                  pizzaSize: pizza
                }
              }}>
                <Pizza>
                  <PizzaText>{pizza.size} cm</PizzaText>
                </Pizza>
                <Divider />
                <Typography variant='h5'>{pizza.name}</Typography>
                <Typography>
                  {pizza.slices} fatias, {' '}
                  {pizza.flavours} {singularOrPlural(pizza.flavours, 'sabor', 'sabores')}
                </Typography>
              </CardLink>
            </Card>
          </Grid>
        ))}
      </PizzaGrid>
    </Content>
  )
}

const Pizza = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px solid ${({ theme }) => theme.palette.grey.A100};
  border-radius: 50%;
  background: ${({ theme }) => theme.palette.common.white};

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: ${({ theme }) => theme.palette.grey.A100};
    transform: rotate(45deg)
  }

  &::before {
    width: 160px;
    height: 1px
  }

  &::after {
    width: 1px;
    height: 160px
  }
`
const PizzaText = styled(Typography).attrs({
  variant: 'h5'
})`
  && {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${({ theme }) => theme.palette.common.white};
  }
`
export default ChoosePizzaSize
