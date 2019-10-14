import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider
} from '@material-ui/core'
import { AuthProvider, OrderProvider } from 'contexts'
import App from './app'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
})

const Root = () => (
  <MuiThemeProvider theme={theme}>
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <OrderProvider>
          <CssBaseline />
          <GlobalStyle />
          <BrowserRouter>
            <Route component={App} />
          </BrowserRouter>
        </OrderProvider>
      </AuthProvider>
    </ThemeProvider>
  </MuiThemeProvider>
)

const GlobalStyle = createGlobalStyle`
  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
export default hot(module)(Root)
