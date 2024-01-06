import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  // 8 is the default length
  const [hasNumber, setHasNumber] = useState(false);
  // false means no number
  const [hasSpChar, setHasSpChar] = useState(false);

  const [password, setPassword] = useState("")
  // no password on default

  // using useRef hook here (see notes.md)

  // useRef hook takes any element from the web page, takes its reference and allows us to do manipulation with it
  
  // Here we manipulated the password text i.e. it would get highlighed whenever we copied it to clipboard

  // pass that reference to the element in the return (html, tailwind css) statement too! 

  // This develops a connection bridge between both the function and DOM UI

  const passwordRef = useRef(null); // null is the default value (no reference by default)
  // to give reference, go to input tag of password


  // Now to make a password generator by default, we have to use a callback function which will call that password function multiple times, but to include all the states we declared above, we need to optimize it, 
  // Hence we use a "USE CALLBACK" HOOK

  // Use Callback memorizes a function or parts of it which can be re-used

  const passwordGenerator = useCallback(
    // writing the function here
    () => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      // choose char combination from these

      if(hasNumber) {
        str += "1234567890";
        // chose numbers from these and append to string
      }

      if(hasSpChar) {
        str += "!@#$%^&*()_+=[]{}~`"
        // choose sp chars from these and append to string
      }

       // now we put in password inside pass, for that we run a loop from 1 to length and choose characters at array's random index positions and keep appending it till loop runs

      for(let i = 1; i <= length; i++) {

        let char = Math.floor(Math.random() * str.length + 1)
        // we did str.length +1 to make sure str length is not zero (if random number comes out to be 0), chose a random number and did its floor to make it to integer (we are talking about the array index here)

        pass += str.charAt(char)
        // we need to concatenate each char to make the pass string

      }

      // after loop ends, update the setPassword

      setPassword(pass);

    }, // function ends here

    // Dependencies
    [length, hasNumber, hasSpChar, setPassword])
    // here we are trying to optimize the code method
    // we used setPassword instead of password here because if we used password then it would keep getting running and optimized (password getting changed) at every step which would be un-necessary

    // making copyPasswordToClipboard method
    const copyPasswordToClipboard = useCallback(() => {
      // using useRef to give the user a nice experience that password has been copied
      passwordRef.current?.select()
      // ? => means optional select i.e. select only if the value of passwordRef is non-zero
      // This highlights the password text when we click on copy button

      // to select only a specific length of the entire password text:

      // passwordRef.current?.setSelectionRange(starting index, ending index)



      // using window to do copyPasswordToClipboard in react.js

      // in next.js, there is server side rendering and all the code is executed in the server and there is no window object in the server

      // IMP
      window.navigator.clipboard.writeText(password)


    }, [password])

/* here we are trying to optimize the 
  copyPasswordToClipboard PaymentMethodChangeEvent, hence we are using the useCallback hook, also since it is only related to password, we are putting only password in dependencies */


  // Use Effect hook is used when the page is loaded and it is called during the first time and if any of the dependencies has been tampered with or changed, the code is rerun

    useEffect(() => {
      passwordGenerator()
    },
    [length, hasNumber, hasSpChar, passwordGenerator] 
    // here we will rerun the code if any tampering is done with the program
    // the goal to run the project is being achieved from here
    )


  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      {/* the overflow-hidden class will apply the overflow: hidden; style to the <div> element, effectively hiding any content that overflows beyond the specified dimensions of the container. */}
      <input 
      type='text'
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      // this means no editing allowed
      ref = {passwordRef}
      // used useRef hook's reference
       />
       <button 
      //  now we try to copy the password to clipboard upon clicking it
      onClick={copyPasswordToClipboard}
       className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
       {/* 
The shrink-0 utility class in Tailwind CSS is used to set the flex-shrink property to 0. The flex-shrink property defines the ability for a flex item to shrink if necessary. If you apply shrink-0 to a flex item, it means that the item will not shrink and will retain its original size even if there is not enough space in the flex container. */}

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          // gives seek bar
          min={4}
          max={50}
          // min and max password ranges
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          // we need to call an onChange event to make the seek bar move
          // This onChange method, cannot be used directly, we need to pass an event (e) to it which will call the setLength method here. Give value inside the setLength method(e.target.value)
          />
          <label>Length: {length}</label>
          {/* gives label of length : number */}
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={hasNumber}
          id='numberInput'
          onChange={() => {
            setHasNumber((prev) => !prev);
            // T -> F and vice versa i.e. reverse the previous (prev) value
          }}

          />
          <label htmlFor="numberInput">Numbers</label>
          {/* connect label name with input id */}

        </div>


        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={hasSpChar}
          id='spCharInput'
          onChange={() => {
            setHasSpChar((prev) => !prev);
            // T -> F and vice versa i.e. reverse the previous (prev) value
          }}

          />
          <label htmlFor="spCharInput">Sp. Characters</label>
          {/* connect label name with input id */}

        </div>

      </div>
     </div>
    </>
  )
}

export default App
