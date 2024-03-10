// eslint-disable-next-line no-unused-vars
import React from 'react'

// 🛑 17. Before working on this file, make some changes in index.js and add some imports there

// importing container and logo from index.js
import {Container, LogoutBtn, Logo} from "../index"

// importing some links, selectors and navigations
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// useNavigate and useNavigation are different


function Header() {
  // we have to extract info from the state if the user is authenticated or not
  const authStatus = useSelector((state) => state.auth.status);
  // we get the state access inside of it, and we are checking the initial state of this from authSlice.js where we set initial state as false 

  // this line will be somewhat similar to useDispatch
  const navigate = useNavigate()

  // 🛑🛑 Whenever we make a navbar like this, we have to make an array and loop over it

  // We will have an array of objects, separated by commas.  
  // 🛑Benifit, whenever we add a new feature, just append it to the object and we're done, instead of creating new elements when not using objects
  const navItems = [
    {
      name: 'Home',
      slug: '/', // where will the URL go to
      active: true
    }, 
    {
      name: 'Login',
      slug: '/login', // where will the URL go to
      active: !authStatus
    }, 
    {
      name: 'SignUp',
      slug: '/signup', // where will the URL go to
      active: !authStatus
    }, 
    {
      name: 'All Posts',
      slug: '/all-posts', // where will the URL go to
      active: authStatus
    }, 
    {
      name: 'Add Post',
      slug: '/add-post', // where will the URL go to
      active: authStatus
    }, 
     
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>

          <ul className='flex ml-auto'>
          {/* 🛑 Using a loop to loop over the list items in the unordered list */}
            {navItems.map((item) => 
            item.active ? (
              <li key = {item.name}>
              {/* now we use key with that attribute which is constantly getting changed or updated, here it is li */}
                <button 
                onClick={() => navigate(item.slug)} // go to the item's url when we click it. For navigate, we gave url of the item we want to go to
                className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                 >{item.name}</button>
              </li>
            ) : null
            )} 
            {/* using no return, hence use ()  */}

            {/* After this, we need a logout button, make it visible depending on the auth status */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            {/* 🛑🛑🛑 This code after && will only be displayed when authStatus is true */}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header

// 🛑 18. Now for our project, we will design a common button which we will use at many places. Go to Button.jsx
