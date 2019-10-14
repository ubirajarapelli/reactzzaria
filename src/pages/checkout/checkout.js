import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'
import {
  Button,
  Grid,
  List,
  ListItem,
  Paper,
  TextField as MatTextField,
  Typography
} from '@material-ui/core'
import {
  Content,
  Footer,
  Title as UiTitle
} from 'ui'
import { singularOrPlural } from 'utils'
import { useOrder } from 'hooks'

const Checkout = () => {
  const { order } = useOrder()
  console.log('order', order)

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Title>Qual o endereço para a entrega?</Title>
            <PaperContainer>
              <Grid container spacing={2}>
                <TextField label='CEP' xs={4} autoFocus />
                <TextField label='Rua' xs={9} />
                <TextField label='Número' xs={3} />
                <TextField label='Complemento' xs={12} />
                <TextField label='Cidade' xs={9} />
                <TextField label='Estado' xs={3} />
              </Grid>
            </PaperContainer>
            <Title>Qual o seu telefone?</Title>
            <PaperContainer>
              <TextField label='Telefone' xs={4} />
            </PaperContainer>
          </Grid>

          <Grid container item xs={12} md={6} direction='column'>
            <Title>Informações do seu pedido</Title>
            <PaperContainer>
              <List>
                {order.pizzas.map((pizza, index) => {
                  const { pizzaFlavours, pizzaSize, quantity } = pizza
                  const { flavours, name, slices } = pizzaSize
                  return (
                    <ListItem key={index}>
                      <Typography>
                        <strong>{quantity}</strong>
                        {singularOrPlural(quantity, ' pizza ', ' pizzas ')}
                        <strong>{name.toUpperCase()}</strong>
                        ({slices}{singularOrPlural(slices, ' fatia ', ' fatias ')},
                        {flavours} {singularOrPlural(flavours, ' sabor', 'nos sabores')}),
                        <br />
                        <strong>{pizzaFlavours.map(({ name }) => name).join(', ')}</strong>
                      </Typography>
                    </ListItem>
                  )
                })}
              </List>
            </PaperContainer>
          </Grid>
        </Grid>
      </Content>
      <Footer>
        <FooterContent>
          <Button variant='contained' color='primary'>
            Confirmar dados
          </Button>
        </FooterContent>
      </Footer>
    </>
  )
}

function TextField ({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MatTextField
        fullWidth
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        {...props} />
    </Grid>
  )
}

const Title = styled(UiTitle).attrs({
  variant: 'h6'
})`
  && {
    text-align: left
  }
`
const PaperContainer = styled(Paper)`
  && {
    flex-grow: 1;
    margin-bottom: ${({ theme }) => theme.spacing(5)}px;
    padding: ${({ theme }) => theme.spacing(2)}px
  }
`
const FooterContent = styled.div`
  display: flex;
  justify-content: flex-end
`
TextField.propTypes = {
  autoFocus: t.bool,
  xs: t.number
}

export default Checkout
