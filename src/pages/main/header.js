import React from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MatToolbar
} from '@material-ui/core'
import HeaderCommon from './header-common'
import HeaderCheckout from './header-checkout'
import { CHECKOUT } from 'routes'

const Header = () => (
  <AppBar>
    <Toolbar>
      <Switch>
        <Route path={CHECKOUT} component={HeaderCheckout} />
        <Route component={HeaderCommon} />
      </Switch>
    </Toolbar>
  </AppBar>
)

const Toolbar = styled(MatToolbar)`
  && {
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
    margin: 0 auto;
  }
`
export default Header
