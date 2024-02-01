import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// Now we have made a delete functionality, to delete todos, we have to send info to store whenever we delete a todo
// For this, use useDispatch again
import {removeTodo, updateTodo} from '../features/todo/todoSlice'

function Todos() {

  // Now we know that the todos is an object where each todo is an array of objects, to display those todos, we will apply a loop to that todos (see todoSlice.js)
  // Also to do this, we have to get values from the store, for this let us import useSelector to get values from store
  const todos = useSelector((state) => state.todos)
  // Normally we use a callback like () => but since there is only one value (state), no need to write in this manner
  // Syntax -> Here inside every useSelector, there will be a state which guides us to the state (or store) inside this state, there is a todos array which we will extract

  // Using dispatch for the delete option.
  const dispatch = useDispatch()



  // Trying to include the update todo functionality

  const [updatedText, setupdatedText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null)

  const handleUpdateTodo = (id) => {
    // Dispatching updated todo action with todoid and updated text
    dispatch(updateTodo({id, newText: updatedText}))
    // see updatedTodo function in todoSlice.js

    // Cleaning the updated text and todo id after updating for a fresh new next update
    setupdatedText('')
    setEditTodoId(null)

  };

  const handleEditClick = (id, originalText) => {
    // what happens when we click this button (Update and Save cases in return block)
    // Theory is whenever we click on the update button, the original text will be highlighted, i.e. setUpdated text takes up the value of original text
    // and setEditTodoId takes the id of original text. So we lock on both these parameters to edit.
    setEditTodoId(id)
    setupdatedText(originalText);
  }

  return (

    <>
      <div className='flex justify-center'>
        <ul className='list-none w-full'>

          {/* Let us now do mapping (looping) for one todo to get multiple todos (the same number as the one we add) */}
          {todos.map((todo) => (
            <li 
            className="mt-4 flex justify-around flex-wrap items-center bg-zinc-800 px-4 py-2 rounded"
            // Mapping by key
            key={todo.id}
            >

              {/* Now we manage the update text functionality */}
              <div className='flex items-center'>

                {editTodoId === todo.id ? (
                  // // Render (Inserting) an input field when editingTodoId matches the current todo id
                  <input
                  type='text'
                  value={updatedText}
                  onChange={(e) => setupdatedText(e.target.value)}
                  />
                )
                :
                (
                // Display the original text when not in edit mode
                  <div className='text-white'>
                    {todo.text}
                  </div>
                    
                )}

                {/* Making the save button now */}
                {editTodoId === todo.id ? (
                  // Render "Save" button when in edit mode
                  <button 
                  className='text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-700 rounded text-md ml-2'
                  onClick={() => handleUpdateTodo(todo.id)}
                  >
                    Save
                  </button>
                ) : (
                  // Render "Update" button when not in edit mode
                  <button
                    className='text-white bg-yellow-500 border-0 py-1 px-4 focus:outline-none hover:bg-yellow-600 rounded text-md ml-2'
                    onClick={() => handleEditClick(todo.id, todo.text)}
                  >
                    Update
                  </button>
                )}
              </div>
              


              {/* Delete Button */}
              <button
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              // onClick={dispatch()}>
              // 🛑🛑🛑 Now we cannot pass dispatch like this as we have to give "reference only" in onclick method
              // If we pass like this, then it will execute immediately, but we want it to execute when we press the button

              // Hence use callbacks
              onClick={() => dispatch(removeTodo(todo.id))}
                // Here from dispatch we get a remove todo function from where we extract the todo id we want to remove
              
              >
                {/* X icon svg   */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </li>
          ))}  
          {/* Mapping Over */}
        </ul>
      </div>
    </>
  )
}

export default Todos

// 7. Go to App.jsx to test the APP by running it and importing components
