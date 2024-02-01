import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
  // importing reducer functionality for dispatch
  import {addTodo} from '../features/todo/todoSlice'

function AddTodo() {

  // Syntax => AddTodo (Add something in the store), 
  // How to Add -> By Dispatching
  // Let us import the dispatch hook then

  // Also importing use State to change the form state
  const [input, setInput] = useState('')


  const dispatch = useDispatch()

  // Now making the addTodoHandler function now

  const addTodoHandler = (e) => {
    // 🛑🛑🛑 since the form is submitted on default, we will prevent it
    e.preventDefault()

    // Dispatch makes changes in the store by using a reducer 
    // So call like this, 
    // dispatch(a particular reducer functionality: see the end of todoslice.js where we exported the functionalities individually(a particular command / payload))
    dispatch(addTodo(input))
    // To access this value i.e. input, this value is inside action.payload

    // Now we clean the form and make it empty i.e. a brand new one every time the site reloads or a new user comes
    setInput('')
  }

  // Now we have made the functionality where we are able to add Todos to the store
  // Now to display todos, we use useSelector hook 

  // 6. for this go to Todos.jsx

  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
     {/* space-x-3 > * + *	margin-left: 0.75rem; /* 12px  */}
      <input 
        type='text'
        className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
        // Ring Width - Utilities for creating outline rings with box-shadows.
        // Ring Offset Color Utilities for setting the color of outline ring offsets.
       // text-base	| font-size: 1rem; /* 16px */  |  line-height: 1.5rem; /* 24px */
      //  leading-8	line-height: 2rem; /* 32px */ (Spaces between 2 lines, less number means less spaces)
      // transition-colors duration-200 ease-in-out - https://tailwindcss.com/docs/transition-property
      placeholder='Enter a todo....'
      value={input}
      onChange={(e) => setInput(e.target.value)}
      />
      <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
      >
      Add Todo
      </button>
    </form>

  )
}

export default AddTodo
