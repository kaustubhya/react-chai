import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive") // olive is default color

  return (
    
    <>
      <div className="w-full h-screen duration-200"
      //  injecting inline css here now with JS
      style={{backgroundColor: color}}>
      {/* since we already have 2 braces, there is no need to put additional braces for variable here */}
        <div class="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* Test Oye, just text for testing the outer div*/} 
        {/* fixed: Positions the container fixed relative to the viewport.

        flex: Enables Flexbox layout for the container.

        flex-wrap: Allows the container to wrap its items onto multiple lines if needed.

        justify-center: Aligns the items in the container along the main axis (horizontal axis in this case) to the center.

        bottom-12: Positions the container 12 units from the bottom of the viewport.

        inset-x-0: Sets left and right padding to 0, ensuring the container spans the full width horizontally.

        px-2: Adds horizontal padding of 2 units to the container. */}

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            {/* See the similar terms explaination above
            gap-3: Sets the gap between flex items to 3 units.
            
            shadow-lg: Applies a large shadow to the container, creating a sense of elevation. */}



            {/* to change the button color, we can use an onClick method and change the state (setColor) on clicking it */}

            {/* A general approach is to include onClick here */}
            {/* Most general approach is to use an arrow function: onClick = {() => setColor("red") */}

            {/* Doubts: we could have also written onClick={setColor("")} */}
            {/* Normally onClick method expects a "function" and 
            Here we are giving the function's reference to onClick. When giving only reference, we cannot pass the parameters, this is a JavaScript syntax issue  */}
            {/* setColor is a function, so onClick would expect a return type of function here but here we will not be able to give a function return type*/}

            {/* When we use this way:
            () => setColor("red")
            Here () is a callback which calls a function (setColor here) inside a function; and hence we are giving a return type of function here, which was needed by onClick method */}



            <button onClick = {() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "red"}}>Red
            </button>
            {/* Now, in the context of the Tailwind CSS class outline-none, it is used to remove the default outline that browsers apply to focused elements, which is often a dotted or solid border. This is commonly used for improving the visual appearance of buttons or other interactive elements.
            

            rounded-full: Rounds the corners of the element, creating a circular or pill-shaped appearance. In this case, it makes a fully rounded button.

            shadow-lg: Applies a large shadow to the element, creating a sense of elevation.

            Yes, if you apply the rounded-full class along with px-4 (horizontal padding of 4 units) and py-1 (vertical padding of 1 unit), you will get a button with a pill-shaped appearance. The rounded-full class in Tailwind CSS rounds all corners, effectively making the element circular or pill-shaped.
            */}


            {/* To get multiple buttons, just copy the button code */}

            <button onClick = {() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "orange"}}>Orange
            </button>

            <button onClick = {() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "blue"}}>Blue
            </button>

            <button onClick = {() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
            style={{backgroundColor: "green"}}>Green
            </button>

            <button onClick = {() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{backgroundColor: "yellow"}}>Yellow
            </button>
          </div>
        </div>
      </div>

      {/* When we refresh, we get olive color back, why ?
      A. Actually the initial state has color olive and the reload technically resets the state. So, it gets the olive color. */}

    </>
  )
}

export default App
