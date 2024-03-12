// This is a dropdown button which will tell us if our account status is active or deactive

import React from 'react'

// We have label, hence using useId
import { useId } from 'react'

const Select = ({
    // giving props (properties)

    // 1. Options to select from
    options,
    // giving label, as it is similar to input field
    label,
    className = '',
    // alternative => className,
    ...props
}, ref) => {

    const id = useId();
    
  return (
    // let us try making a form
    // example of what we are trying to do: https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select
    <div className='w-full'>
        {/* doing conditional rendering */}
        {label && <label htmlFor='{id}' className=''></label>}

        <select
        
        // Adding all props given by user
        {...props}

        // Also adding ID and reference
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* Adding Options inside the select element */}
            {/* We need to loop options, so take it in the form of an array */}
            {/* not returning anything below, hence () */}            
            {options?.map((option) => (
                <option key={option} value={option}>
                    {/* important to include keys and 🛑values🛑 both with options for identification*/}
                    {option}
                </option>
            ))}
            {/* Here also we used conditional rendering using ternary operators. If options here would have had no value, then the app would've crashed */}
            {/* So we used '?' meaning, if options do have a value, then only do mapping and looping in it */}
            {/* Alternative => use if else to check for options array length, if length != 0 then only loop through it */}
        </select> 

    </div>
  )
}

// Now since we made a unique select component we need a React.forwardRef to give it reference access for state updation
// Previously we did wrap it inside functions in the start
// An alternative is to wrap it while exporting

export default React.forwardRef(Select)


// 22. 🛑 Go to PostCards.jsx now