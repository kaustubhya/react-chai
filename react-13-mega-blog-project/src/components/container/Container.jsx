import React from 'react'

// Container accepts our properties as a children.
// Container is like a box, where we define its height and width and majorly use it for styling.

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>

    // Bonus 💡 Here we have only one line of code, so we can choose to remove the parenthesis of the return statement here. Just like we did in if-else, the result will be the same.

    // eg. return <div className='w-full max-w-7xl mx-auto px-4'> {children} </div>;
    // Put a semicilon to specify that it is in a single line
  )
}

export default Container

// 13. 🛑🛑 When you are done with this, do 2 things, 
// a. Make a logo.jsx file inside components folder
// b. Go to Footer.jsx and write the footer code there. 
