import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName: 123,
    password: "oye oye"
  }

  let newArr = [1,2,3,4,5]

  return (
    <>
    <Card userName="Ram Bhakht" btnText = "click kro ram ke naam par" objDemo = {myObj} arrDemo = {newArr}/>
    <Card userName="Hanuman Bhakht" />
    </>

  )
}

export default App
