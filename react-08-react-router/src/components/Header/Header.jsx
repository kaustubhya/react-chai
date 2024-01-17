import React from 'react'
import {Link, NavLink} from 'react-router-dom'

// Link is used here in place of <a> tag. When we use <a> tag, the entire page refreshes again. In react, we donot have the concept of refresh. Here the DOM values get exported and is displayed on the webpage directly. Hence we use <Link> tag which is an updated version of <a> tag.

// NavLink is almost the same as link but with some additional features and functionalities

// here we created the function and exported it by default all in one line
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            {/* sticky here means header will stick to the top even if we scroll the page down  */}
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                     {/* <Link> tag working attributes here we have "to" which is similar to "href"  */}
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>


                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>


                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>


                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                // we need to tell the Navlink where we are going to go to utilize the isActive variable
                                // hence we use "to"
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* We have written Navlink tailwind code under backticks `` and inside a callback function here because we can change and alter the classes, whenever we want to */}
                                    {/* Here we put the JS variable isActive inside the function here and called it in the tailwind class using ${} for variables. We used an if else ternary operator here. If Home is Active then do text-orange-700 else do text-gray-700 */}
                                    Home
                                </NavLink>
                            </li>

                            {/* Making the About Us Navlink by copy-pasting the above code */}

                            
                            <li>
                                <NavLink
                                // we need to tell the Navlink where we are going to go to utilize the isActive variable
                                // hence we use "to"
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* We have written Navlink tailwind code under backticks `` and inside a callback function here because we can change and alter the classes, whenever we want to */}
                                    {/* Here we put the JS variable isActive inside the function here and called it in the tailwind class using ${} for variables. We used an if else ternary operator here. If Home is Active then do text-orange-700 else do text-gray-700 */}
                                    About Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                // we need to tell the Navlink where we are going to go to utilize the isActive variable
                                // hence we use "to"
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* We have written Navlink tailwind code under backticks `` and inside a callback function here because we can change and alter the classes, whenever we want to */}
                                    {/* Here we put the JS variable isActive inside the function here and called it in the tailwind class using ${} for variables. We used an if else ternary operator here. If Home is Active then do text-orange-700 else do text-gray-700 */}
                                    Contact Us
                                </NavLink>
                            </li>

                            <li>
                                <NavLink
                                // we need to tell the Navlink where we are going to go to utilize the isActive variable
                                // hence we use "to"
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* We have written Navlink tailwind code under backticks `` and inside a callback function here because we can change and alter the classes, whenever we want to */}
                                    {/* Here we put the JS variable isActive inside the function here and called it in the tailwind class using ${} for variables. We used an if else ternary operator here. If Home is Active then do text-orange-700 else do text-gray-700 */}
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}