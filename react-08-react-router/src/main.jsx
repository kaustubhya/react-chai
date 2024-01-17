import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About Us/About_Us.jsx'
import Contact from './components/Contact Us/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// Now there are 2 ways of creating a router
// 1. First way
// const router = createBrowserRouter([
//   // this is an array inside a method
//   // put in a list inside this array for which we all want the objects for
//   // or 
//   // is array ke andar saare list daal dete jiske liye hume objects chahiye  
//   {
//     // first object
//     // creating main path
//     path: '/',
//     // coming back after creating Layout.jsx which is our home page
//     // add element 
//     element: <Layout />,
//     // Now if there are more elements to route to inside Home, then make childrens out of it, include all childern in an array of objects where each object is a child
//     children: [
//       {
//         path: "",
//       // Is is the path that appears when the site is first loaded
//       element: <Home />
//       },

//       {
//         path: "about",
//         element: <About />
//         // Attaching the About Us Component in this route
//       },
//       // It is like when we visit the site
//       // xyz.com/ is the home page
//       // xyz.com/about is the about us page
//       {
//         path: "contact",
//         element: <Contact />

//       }
//     ]

//   }
// ])


// 2. Second Way

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />

      {/* Now that we have made our app, let us do something to keep track of individual users. */}
      {/* In the real world, each user gets a unique id, to keep track of the user and its unique id, we use a user component, a routing to that component and a custom hook which takes care of multiple users at once */}
      <Route path='user/:userId' element={<User />} />
      {/* Go to User.jsx now, also keep note of the value ":userId" i.e. the value we gave after the colon */}

{/* ****************** ↑ This means taking in "DYNAMIC VALUES" ↑  ******************************** */}



      <Route
      // using Loaders to optimize code (see Github.jsx)
      loader={githubInfoLoader}
      path='github'
      element={<Github />} />
      {/* Include in Header Navbar too */}


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Here we have no need of putting in the App component, while using Routing, we can insert an Routing Component */}
    {/* Route Provider will always need a prop to work, without it, it will never work */}
    <RouterProvider router={router}/>
    {/* Here we gave it a router prop. */}
  </React.StrictMode>,
)
