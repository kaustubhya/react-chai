import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts/'
import './App.css'


// 1. Go To TodoContext.js
function App() {

  // Now we will store the todos and due to which the state will also get updated
  // Hence here we will use useState

  const [todos, setTodos] =  useState([])
  // keep by default as an empty array, this will update and get looped when we add items to it
  
  // If we donot put an empty array, we will get null as a default which we donot want
  // The todos here represent all available todo values and not a single todo value


  // Let us define functionalities now
  const addTodo = (todo) => {
    // bow this todo inside () is a string that we got from the form 

    // 🛑🛑🛑🛑🛑 Now if we do: setTodos(todo), this will overwrite all of our previous Todos and give our a new current todo

    // Now we want to get access to the "prev" state of setTodo, hence use a callback:
    setTodos((prev) => [{id: Date.now(), ...todo} , ...prev])

    /*

    [todo, ...prev]) this will add all new previous values and a new todo on top

    [...prev, todo]) this will add all new previous values and a new todo at the bottom

    // Now simply writing todo will not do, we have to create it, and since todo is an object, we make it as an object (include ids, other objects inside of it etc.)

    todo => {id: Date.now(), ...todo}

    Here in todo, we gave an id (we gave current date and time as a unique id as by using it all ids will be unique), and ...todo means the rest of todo elements

    */


  }

  const updateTodo = (id, todo) => {
    // Now to tell which id to update, use looping (maps or foreach) in this array (by id key) to find which id to update
    // Using same logic as in adding (prev)
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
    // {} => not putting this {} as we donot want to return something here

    /* Mapping:

    // We have an array of todos
    Now here prevTodo is an individual todo, inside this prev todo, we have each todos id, we make sure that id of each prev todo is === the id that we pass in the updateTodo function
    Now we pass a ternary if-else here, if upDate todo id is same as the prevTodo.id, then we put upDateTodo(todo) i.e. update the existing todo message else if it is false then we keep the prevTodo i.e. the individual todo message as it is. No change needed  

    */
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))

    /*
    Now for deletion we can use the following logic, we can though use a map but to make it efficient, we can use filter function.
    
    In filter, we will take all values and pass all values except one, that one will be the value we want to delete

    Filter works on true statements, only statements that are true are allowed to pass,
    here we did todo.id !== id i.e. pass all those values for which todo.id is not equal to the id that is listed (i.e. the id we want to delete)
    And finally delete (not pass) that value whose id matches the id of deleteTodo
    */
  }

  // 🛑🛑🛑🛑 Toggle Checkmark

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))

    /* 
      Here it works as follows, 
      Basic principle is like updateTodo only where we use map to go to each todo

      // Now we check if the id of toggleComplete matches the id of prevTodo, if it does not then do nothing and pass the prevTodo as it is

      // If it does then:
      1. pass all elements of prevTodo using ...prevTodo

      i.e. 
      ...prevTodo => todos: [
        {
            id: 1, 
            todo: " Todo msg",
            completed: false,
        }

      2.  Now after passing all elements of prevTodo, we take the completed attribute and set up it as a reverse toggle i.e. if the default value is false, make it true and vice versa (completed: !prevTodo.completed => reverse Toggle Switch) 
    ]
    */
  }



  // Let us Start With Local Storage
  // Now it only works on the client side and not on the server side
  // It has 2 key commands, getItem and setItem
  // In get, pass only value but in set, we pass both key and value

  // Normally in localstorage, data is stored in string format, but we need to convert it in JSON style to get proper data in JS 

  // 🛑🛑🛑 In context of our Todo, when we close our app and reopen it, we want our todos that we'd written earlier to be as it is.
  // So we want a hook that can fetch data from the local storage whenever we open or restart our app. For this, we will use "useEffect"
  
  useEffect(() => {
    // local storage will not work in server side rendering
    const todos = JSON.parse(localStorage.getItem("todos")) // todos is key
    // JSON.parse converts anything to JSON for us to use in JS

    if(todos && todos.length > 0)
    // Checking if we have todos or not
    // Also checking if it is not an empty string 

    setTodos(todos)

  }, [])


  // Now there are many ways for this next approach but we will use the following one for setting the items in localstorage

  // Here we will use, another useEffect

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
    // key of getItem and setItem should be same (here key => todos)
    // value -> todos
    // we used JSON.stringify to convert our JSON value to string and store it in local storage
    // No need to store it in a variable here
  }, [todos])

  // 4. You can go to Form.jsx and FormItem.jsx now, do basic rfce in both, then go to index.js and import and export both there 

  
  
  return (
    <TodoProvider value={{todos, addTodo, deleteTodo, updateTodo, toggleComplete}}> 
    {/* Wrapping with ToDo Provider */}
    {/* Also giving values from Provider file */}
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
