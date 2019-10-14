import React from 'react'
import t from 'prop-types'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import {
  Grid,
  Button as MatButton,
  Typography
} from '@material-ui/core'
import { useAuth } from 'hooks'
import { singularOrPlural } from 'utils'

const FooterWithOrderAndButtons = ({ buttons, history, location }) => {
  const { userInfo } = useAuth()
  const { pizzaSize, pizzaFlavours } = location.state
  const { flavours, name, slices } = pizzaSize

  return (
    <Grid container>
      <OrderContainer>
        <Typography>
          <strong>{userInfo.user.firstName}</strong>, seu pedido é:
        </Typography>
        <Typography>Pizza <strong>{name.toUpperCase()}</strong> - ({slices}{singularOrPlural(slices, 'fatia', 'fatias')}, {flavours}{singularOrPlural(flavours, 'sabor', 'sabores')})</Typography>
        {pizzaFlavours && (
          <Typography>
            {singularOrPlural(pizzaFlavours.length, 'no sabor ', 'nos sabores ')}<strong>{pizzaFlavours.map(({ name }) => name).join(', ')}</strong>
          </Typography>
        )}
      </OrderContainer>
      <ButtonsContaiiner>
        <Button
          {...buttons.back}
          component='a'
          onClick={(e) => {
            e.preventDefault()
            history.goBack()
          }}
        />

        <Button
          {...buttons.action}
          component={Link}
          color='primary'
        />
      </ButtonsContaiiner>
    </Grid>
  )
}

const OrderContainer = styled(Grid).attrs({
  item: true
})`
  && {
    flex-grow: 1;
  }
`
const ButtonsContaiiner = styled(Grid).attrs({
  item: true
})`
  && {
    display: flex;
    align-itens: center
  }
`
const Button = styled(MatButton).attrs({
  variant: 'contained'
})`
  && {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`
FooterWithOrderAndButtons.propTypes = {
  buttons: t.object.isRequired,
  history: t.object.isRequired,
  location: t.object.isRequired
}

export default withRouter(FooterWithOrderAndButtons)
