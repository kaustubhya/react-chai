// Ye file hum ne is liye banayi hai because we need to do the following:

// We need to make sure that when we go to different pages via router, the header and footer will be the same, only the main middle body will change

// One way is to call the header and footer every time when we go to a new page (we do it in App.jsx)
 
//  But here we will do things differently. We will use an 'Outlet'

// Many people call this Layout "Root" also

// We use Outlets for "nesting"


// ******************  IMP *****************


/* Nesting means: 
 / => main default root
 /nest1
 /nest1/nest2
 /nest1/nest2/nest3
 
 Like this

 eg. www.xyz.com/ -> root

 Let us do nesting:

 www.xyz.com/home/products/tv 

 here we went from root to home to products to tv via nesting


 **************** Nesting Over ****************************
 */

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
    // This will make sure that at every page, header and footer will be same, only outlet (which is in the middle) will change

    // Change the order of elements to get different results, like if outlet is in top and header and footer components are below it then only top portion of the page will change 

    // to to path in main.jsx now
  )
}

export default Layout
