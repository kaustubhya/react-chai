// making components reusable now
// InputBox.jsx is the input box component in the Ui

import React from 'react'

function InputBox({
  // the following are the values that we will expect from the users
  label,
  amount,
  onAmountChange, // calls the useState when we change the amount
  onCurrencyChange, // calls the useState when we change the amount
  currencyOptions = [], // store all currency types in an array
  selectCurrency = "usd", // set default currency as usd (take atleast one currency as input)
  amountDisable = false, // this is optional but used in production (do you want to give amount or not)
  currencyDisable = false, // this is optional but used in production (do you want to give currency or not)
  className = "",
  // default className is empty
}) {

return (
  <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
    {/* here we wrote the special css {``} because we are giving user an option to give their own css via javascript variable "className"*/}
      <div className="w-1/2">
          <label  className="text-black/40 mb-2 inline-block">
              {label}
               {/* wrapping label and taking from JS */}
          </label>
          <input
              
              className="outline-none w-full bg-transparent py-1.5"
              type="number"
              placeholder="Amount"
              disabled={amountDisable}
              // check if input field is disabled or not by using this amountDisabled option
              value={amount}
              // every input box got an onChange method
              onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              // here to make it reflect with the html, we used an event (e) trigger in the js function and used && to check if onAmountChange is available, if it does then we can use that function

              // also inside onAmountChange function, we cascaded it in Number form because sometimes JS treats e.target.value as a string
          />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
              className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
              value={selectCurrency}
              // takes usd as default value
              onCurrencyChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              // no need to convert it into number here as it will be in the form of usd, inr, gbp etc.
              disabled={currencyDisable}>

                {/* now to get a list of currencyOptions, we need to put it in a loop, for this, use mapping with currencyOptions*/}

                {currencyOptions.map((currency) => (
                  // use parenthesis to avoid a return statement

                  // Also must use "keys" to enhance the performance of loops in React
                  <option key = {currency} value={currency}>
                    {currency}
                     {/* show currency display with help of JS */}
                  </option>
                ))}
              
          
          </select>
      </div>
  </div>
);
}

export default InputBox

