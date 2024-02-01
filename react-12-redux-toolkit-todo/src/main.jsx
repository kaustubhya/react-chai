import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './app/store'
// got an error here as I did not put store in {}
import { Provider } from 'react-redux'

// To wrap we need a context provider and a store
// For store, just import it 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* Remove Strict mode */}
    {/* Also in context API, we gave / passed a value with the provider, here we will pass a prop called store, with a value inside of the prop called "store" too! */}
    <App />
  </Provider>,
)

