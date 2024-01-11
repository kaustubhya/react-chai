import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './custom-hooks/useCurrencyInfo';

function App() {
  // const [count, setCount] = useState(0)
// hook is a method in itself, count is a variable and setCount is a function

// making the states and passing it now
const [amount, setAmount] = useState(0)

// making "From" and "To" States (i.e. from usd to inr like this)

const [from, setFrom] = useState("usd")
const [to, setTo] = useState("inr")

// showing converted result in state
const [convertedAmount , setConvertedAmount] = useState(0)
// we can also give empty string here as default

// Using custom hooks now
const currencyInfo = useCurrencyInfo(from)
// passing a currency here (which one: from one) it will also not get crashed as default value is usd

// now the data from the api is in the form of an object, (having keys and values) we donot want to map values, hence let us map keys 
// To map keys and return data from useCurrencyInfo, do:
const options = Object.keys(currencyInfo)
// this 'options' is same as currencyOptions from InputBox

// Working on the swap button, swap just swaps the usd and inr value from 'from' to 'to' and vice versa, whenever it is clicked
// Similar to swapping 2 variables

const swap = () => {
  setFrom(to) // put setFrom value as 'to'
  setTo(from) // put setTo value as 'from'

  // optional, this will not change result, only keywords of usd and inr
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () => {
  setConvertedAmount(amount * currencyInfo[to])
  // this gives the final result
  // amount is a number, currency info gives the conversion multiplication factor and [to] converts it into a currency type (say usd)
  // to use it with a button, we call it inside a method

}
  
return (
  <div className="w-full h-screen flex justify-center items-center"
  
  style={{
    backgroundImage: `url('https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,  // Replace with the actual background image URL
}}

  >

     
    <div className="flex">
      {/* Main container with flex for both image and form side by side*/}


        {/* Image */}
        <img
            src='https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with the actual image URL
            alt="Description of the image"
            className="max-w-xs h-auto"
        />

        {/* Form */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      // when a form gets submitted, it goes somewhere, to prevent it from going anywhere, we use preventDefault when we fire an event
                      convert()
                      // donot go anywhere, just do the conversion here
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          
                          // giving amount
                          amount={amount}

                          // giving currency options
                          currencyOptions={options}

                          onCurrencyChange={(currency) => setAmount(amount)}

                          // select currency
                          selectCurrency={from}

                          // updates the amount on incrementing and decrementing
                          onAmountChange={(amount) => setAmount(amount)}

                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                          // making swap button work
                          onClick={swap}
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To" 

                          // giving converted amount
                          amount={convertedAmount}

                          // giving currency options
                          currencyOptions={options}

                          onCurrencyChange={(currency) => setTo(currency)}

                          // select currency
                          selectCurrency={to}

                          // donot allow user to make changes in the "to" amount column
                          amountDisable
                          // same as amountDisable = true
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert   
                      {/* making it showy */}
                      {" "} 
                      {/* giving spacing */}
                      {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
