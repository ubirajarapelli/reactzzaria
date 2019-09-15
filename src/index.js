import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import ErrorBoundary from './error'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <App hasError={hasError} />
    )}
  </ErrorBoundary>, document.getElementById('root'))

serviceWorker.unregister()
