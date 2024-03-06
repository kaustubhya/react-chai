import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from "./store/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping app with provider and store */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
// 12. 🛑🛑 After wrapping it in a provider and store, make a folder called container and inside it, make a file named Container.jsx, do rfce there
