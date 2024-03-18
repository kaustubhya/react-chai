import React, {useState} from 'react'
import authServiceObj from '../appwrite/auth_service'
import {Link, useNavigate} from "react-router-dom"
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const SignUp = () => {
    // making variables for the imported hooks and components
    const navigate = useNavigate();
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")

        try {
            // 🛑 Since we are using appwrite i.e. a backend for database, we use async await here as DB takes time
            // Taking in create account from appwrite auth_service.js here
            const userData = await authServiceObj.createAccount(data)
            // data here is, email, name and password (check the appwrite file code)

            if(userData) {
                const userData = await authServiceObj.getCurrentUser()

                if(userData) (
                    dispatch(login(userData))
                    // if userData i.e. current user data is found here, send / dispatch it to login in authSlice in store
                )
                // then navigate the user
                navigate("/")

            }

        }
        catch (error) {
            setError(error.message)
        }
    }


  return (
    <div className='flex items-center justify-center'>
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
            <div className='mb-2 flex justify-center'>
                <span className='inline-block w-full max-w-[100px]'>
                    <Logo width="100%" />
                </span>
            </div>

            <h2 className='text-center text-2xl font-bold leading-tight'>Sign up to create account</h2>
            <p className='mt-2 text-center text-base text-black/60'>
                Already have an account?&nbsp;
                <Link 
                to="/login"
                className='font-medium text-pretty transition-all duration-200 hover:underline'>
                Sign In 
                </Link>
            </p>
            {error && <p className='text-red-600 mt-8 text-center'>{error}</p>}

            <form onSubmit={handleSubmit(create)}>
            {/* Since here we are using react hook form's use form, we took its handleSubmit method and put the create method inside it. In this way it will know where to take data from, how to handle it and what to do after submitting it */}
                <div className='space-y-5'>
                    <Input
                    label="Full Name: "
                    placeholder="Enter your Name"
                    {...register("name", {
                        required: true,
                    })}
                    // 🛑🛑 IMP (...) Syntax for register
                    />

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
                    />

                    <Button
                    type='submit'
                    className='w-full'
                    >Create Account</Button>

                </div>
            </form>

        </div>
      
    </div>
  )
}

export default SignUp

// 25. 🛑🛑 Go to authLayout.jsx
