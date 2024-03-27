import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import store from "./store/store.js"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {AuthLayout, Login} from './components/index.js'

// Importing Pages
import Signup from "./pages/Signup"
import Home from "./pages/Home.jsx"
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import AllPosts from "./pages/AllPosts.jsx"
import Post from "./pages/Post.jsx"



const router = createBrowserRouter([
  {
    // Root
    path: '/',
    element: <App />,
    children: [

      {

        // Home
        path: '/',
        element: <Home />,
      },

      {
        // Login
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
          {/* This is a manual "data" entry on authentication here. This data (false here) goes to Protected function in AuthLayout.jsx. To understand it better, go to AuthLayout.jsx, in components folder */}
          {/* This means that we donot need authentication while logging in */}

            <Login />
          </AuthLayout>
        ),
      },

      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },

      {
        path: "/all-posts",
        element: (
          // 🛑 authentication => authentication={true}
          <AuthLayout authentication>
            {" "}
            <AllPosts />
          </AuthLayout>
        ),
      },

      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },

      {
        path: "/edit-post/:slug",
        // slug is the unique post url that we are editing
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },

      {
        path: "/post/:slug",
        // path to a unique post
        element: <Post />,
      },
    ],
  },
]);

// 35*. 🛑  We came back after building all the pages to add routing

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping app with provider and store */}
    <Provider store={store}>
    {/* Now instead of an <App /> we need a router and a router provider */}
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
// 12. 🛑🛑 After wrapping it in a <Provider, and store>, make a folder called container and inside it, make a file named Container.jsx, do rfce there
