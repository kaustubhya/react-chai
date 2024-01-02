import React, { createElement } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
   return (
      <div>
      <h2>Jai Shree Ram wala custom app</h2>
      </div>
   )
}

const anotherElement = (
   <a href="https://google.com" target = '_blank'> Visit Google </a>
)

const userName = "Mai UserNAME hoon"

const reactElement = createElement(
   // Babbel injects this createElement
   'a',
   {href:"https://google.com", target: '_blank'},
   
   'click me to visit google ', 
   userName
   )

   /* createElement(
      tag,
      {prop attributes},
      direct text
   ) */

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
  

   )
