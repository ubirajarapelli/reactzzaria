import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root'
import ErrorBoundary from './error'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ErrorBoundary>
    {(hasError) => (
      <Root hasError={hasError} />
    )}
  </ErrorBoundary>, document.getElementById('root'))

serviceWorker.unregister()
