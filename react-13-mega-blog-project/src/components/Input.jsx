import React, {useId} from 'react'
// Here in inputs, sometimes we need an "ID" associated with inputs. For that, we use a hook called "useId"
// Earlier we used it with "labels"


// Now there is a good practice to use arrow functions whenever we are using hooks, to make it feel good

// Also since this is an input field, we have to wrap it in a Forward Reference Hook. Inside of it we write our arrow function

const Input = React.forwardRef(function Input({

    label,
    type = "text",
    className = "",
    ...props 

}, ref)  // IMP. Introducing a reference as we earlier discussed in useForwardReference example, where we will have to have a reference for the change or updation in state 

{
    // using useId now for labels   
    const id = useId();

    return (
        <div className='w-full'>
            {/* Doing some conditional Rendering now */}
            {label && <label 
                className='inline-block mb-1 pl-1' 
                htmlFor={id}
                // This will generate a unique ID everytime which is good for SEO purposes, normally it is not used that much in production
            >
            {label}
            </label>
            }

            {/* Label Done, let us work on inputs now */}
            <input
            type={type} // if user has given a type then write that, else we have our default text type
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            // Here also, we write this css in JS manner. Advantage, 🛑 Add your own CSS + Also we are able to include the CSS given in by the user in ${}
            ref={ref}
            // 🛑 This will help us give reference to the parent component. It is for this line that we wrapped our function in forwardRef(). Components are different but it will need access to reference. So it is referred from there and passed from there and from here we will give the updated state's access.
            // This will give us access to onClick, onChange etc..
            {...props} // Taking note of any additional parameters by writing props here
            id={id} 
            // 🛑 By passing id's in both label and input, we expect that whenever a user clicks on a label, they will be redirected to the field where label and input both will have same IDs.
            />
        </div>
    )
})

export default Input
