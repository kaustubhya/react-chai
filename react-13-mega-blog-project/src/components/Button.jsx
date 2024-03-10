// eslint-disable-next-line no-unused-vars
import React from 'react'


// Important thing about buttons is, 
    // 1. What all parameters it is accepting and 
    // 2. Their way of usage
function Button({
    // parameters:
    children,
    // 🛑 Children is just the button text that we will pass into the button
    type = 'button',
    bgColor = 'bg-blue-600', 
    textColor = 'white', // defalult values
    className = "",
    ...props 

    // Now we left className blank and we used ...props because
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}> 
    // Here we used ...props to account for any additional properties entered by the user (say placeholder for eg.)
        {children}
    </button>
  )
}

export default Button

// 🛑 19. Now after you are done with this, take a look at useForwardRef hook explaination by going to the image where I have explained about this hook.
// 🛑 20. Then go to input.jsx