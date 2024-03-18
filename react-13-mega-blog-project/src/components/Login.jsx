// This is a login component and not a login page, we do this to increase scalability in the future

// We use react hook form for this

import React from 'react'
import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
// for redirecting on logging in

import {login as storeLogin} from '../store/authSlice'
// Here we just changed the name of the login component as storeLogin as appwrite also has login. So we removed the naming confusion.

// importing our button, input and logo components
import {Logo, Button, Input} from './index'

// since we are making login, we need the auth service from appwrite
import authServiceObj from '../appwrite/auth_service'

// Also since we are using redux, we need a useDispatch
import {useDispatch} from 'react-redux'

// At last we need a useForm from react hook form. This is compulsary here on our behalf.
import {useForm} from 'react-hook-form'

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // now for reference on react hook form, see this https://react-hook-form.com/get-started#Registerfields
    const {register, handleSubmit} = useForm();
    // this register is not the register page, it is the syntax of useForm()

    const [error, setError] = useState("")
    // This is used to display errors

    const login = async(data) => {

      // in a login form, first set all errors as zero. This is a must.
      setError("")

      try {

        const session = await authServiceObj.login(data)
        // if session is true, then user is logged in, if session is false, then we are not logged in

        if(session) {
          const userData = await authServiceObj.getCurrentUser();
          // extracting the user data if session is true

          // now if we have userData available, i.e. if userData is true, dispatch it
          if(userData) {
            dispatch(storeLogin(userData))
            // sending userData from the appwrite database to the store
            // Now once data is sent to login, its status will be set to true automatically

            // once user is logged in, redirect them
            navigate("/")
            // 🛑 Adv of Navigate over Links => Navigate redirects automatically, For Link we need to click it.
          }
        }

      }
      catch (error) {
        setError(error.message)
      }


    }


  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className='mb-2 flex justify-center'>
          <span className='inline-block w-full max-w-[100px]'>
            <Logo width = "100%" />
            {/* https://www.w3schools.com/css/tryit.asp?filename=trycss_inline-block_span1 */}
          </span>
        </div>
        <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
        <p className='mt-2 text-center text-base text-black/60'>
          Don&apos;t have an account?&nbsp;
          {/* &apos; => ' and &nbsp; => breaks into a new line */}
          <Link
            to='/signup'
            className='font-medium transition-all duration-200 hover:underline text-pretty'
          >
              Sign Up
          </Link>
          {/* https://tailwindcss.com/docs/text-wrap */}
        </p>

        {/* Displaying Errors via conditional rendering */}
        {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}   

        <form 
        onSubmit={handleSubmit(login)}
        className='mt-8'>
          {/* Handle Submit is now an official keyword while using useForm() in react hook form. It takes all the states and updates it on its own and it helps us in not updating the state manually, rather it does it automatically */}
          {/* Here we gave the login method to tell handleSubmit that how are we going to handle the form. Handle Submit is an event, the register in the useForm, takes in all the user entered input values, takes its state and these values are handled by handle submit while submitting the form. */}
          <div className='space-y-5'>

          {/* This is the input component */}
            <Input 
            label="Email: "
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              // To Prevent overriding of data values, we use the ...(spread operator)
              required: true,
              validate: {
                matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be a valid address",
                
              }
            })}
            />

            {/* We did the following above: 
            We took an input for email, gave it a label which overrided the email prop in Input.jsx, also since we used ...props in Input.jsx, we added a new prop called placeholder gave the input type, spread the input as register will get the data in an array form and will not be overridden. */}
            {/* Then we made an object where we said that email is compulsary (required) and to check / validate if it is a valid email address, we used a validate item in the object and inside it we used a matchPattern function where we gave it a RegEx value. */}
            {/* Regex value starts and ends between / Regex /. After that, we used a .test(value) to check if it is correct / valid or not. If it is valid then good, else we passed a message saying to enter a valid email address. */}
            {/* Regex Source => https://regexr.com/3a4dg */}


            {/* Making another input for password */}
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: true,
                validate: {
                  matchPattern: (value) => /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/.test(value) || "Enter a valid password - Password should be between 8 to 64 chars, should have one numeric, one special char and has both upper and lower case chars",
                }
              })}
              // Resource: https://regexr.com/38tvj

            />

            {/* Same logic as email */}


            {/* Getting our Custom made button */}
            <Button
            type='submit'
            className='w-full'
            >Sign In</Button>

          </div>
        </form>   
      </div>      
    </div>
  )
}

export default Login

// 24. 🛑 Go to SignUp.jsx now

