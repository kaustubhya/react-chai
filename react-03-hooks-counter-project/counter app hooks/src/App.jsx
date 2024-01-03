import { useState } from 'react'
import './App.css'

function App() {
  // let counter = 5;
  let value = 0;
  let [counter, setCounter] = useState(value);
  // 15 is the default value
  const addValue = () => {
    // console.log("Clicked", Math.random());
    
    // counter += 1;
    // setCounter[counter];
    // setCounter now has the updated counter value
    //  or we can de 
    if(counter < 20) {
    console.log("Clicked", counter);
    setCounter(counter + 1);
    }

  }

  const removeValue = () => {
    // console.log("Clicked", Math.random());
    
    if(counter > 0) {
      console.log("Clicked", counter);
      setCounter(counter - 1);
      }
    
    // counter += 1;
    // setCounter[counter];
    // setCounter now has the updated counter value
    //  or we can de 

  }

  return (
    <>
    <h1>Jai MATAA DI</h1>
    <h3>Counter Value: {counter}</h3>

    <button
    onClick={addValue}>Add Value{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
