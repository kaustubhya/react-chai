// Reducers are also called Slices in Redux Toolkit.
// Hence we give it the name, todoSlice.js. By giving this name, we tell or let the people know that we are using redux toolkit.

// There can be many types of features like Login Feature, Product Feature, todoFeature etc.

// Methods to create slice
// There are 2 methods but we will only need one

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Now createSlice creates slices for us and nanoid generates unique nano id for us.
// Remember last time in todo with context api, we used the current date and timestamp as unique id, here nanoid will do that work for us.
// I.e. nanoid generates unique ids for us.

// Now we make a method to describe the store's initial state using initialState method. Till tells us if the store is empty, or full or we include and put some values inside of it from some database etc.
// We can either put an array [] or an object with it {}. I prefer object as we can include multiple things inside of it.
const initialState = {
    todos: [{id: 1, text: "Hello World"}]
    // including an array of objects inside this object
}

// Demo function declaration for reducers:
// function sayHello() {
//     console.log("Hello World");
// }

// exporting this slice now with createSlice and export
export const todoSlice = createSlice({
    // We mostly include objects inside of this method.

    // Now we give these objects names (these names will appear on the chrome browser with the help of redux devTools chrome extension)
    // These object names are redux toolkit essentials and we have not named them by our choice; name, initialState etc. are keywords
    name: 'todo',
    initialState,
    // we can either write initial state here after : or we can write it separately (as we did here, look up ↑)

    // last thing left to complete our store is to include reducers
    reducers: {
        // this object here contains properties and functions
        // format => property (prop) : functions
        // We can declare functions either here or at some other place 
        // addTodo: sayHello (Method 1)

        // Method 2
        addTodo: (state, action) => {
        // Now in context API, we only declared the function and not initialize and write it
        // Here we will initialize as well as write it

        // 🛑🛑🛑🛑 Now just like useState and useEffect we get 2 things inside addTodo function (state, action), we will have access to both here always
        // State here gives us access to all the default values present already inside the initialState
        // As for action, we get those values from it which we want to use in a funciton, say to remove a todo, a need an ID, this ID, we will get it from action.
        // Jo data pass ho raha hai, wo milta hai action mein

        // Now we will make a todo which we will get from action 
            const todo = {
            // Now in an array here, we are pushing a todo object, as each todo is an object

            // id: Date.now() 
            // Earlier we did this for id in context API. Now we will do something else i.e. use nanoid
                id: nanoid(), 
                text: action.payload
                // Here inside action, payload is an object from which we will extract texts, like we did this here

                // Now we have made a todo, now to update the state

            }
            // Look at initial state, there we have a default todo, so we will access that state, and push our new todo to it
            state.todos.push(todo)
        
        },

        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
            // overriding these todos by adding a filter 
            // Here todo is an individual todo inside todos, we compare here if the id of an individual todo matches with the action payload, if it does not then pass them, if it does then filter it out and delete them


        },

        updateTodo: (state, action) => {
            // to update a new todo we will first create an object of action.payload having the todo id and a new updated text called new text
            // We will now map this todos, using map function, if we find a todo whose id matches with the one to update, we will update it, else we pass the todos as they are
            const {id, newText} = action.payload
            const updatedTodo = state.todos.map((todo) => todo.id === id ? {...todo, text: newText} : todo);

            state.todos = updatedTodo;
        }


    }

})

// With this we finished exporting the first part, to export the second part, we do the following below

// exporting the functionalities first, because we will update the state always via these reducers
// So these individual functions will be very useful to us

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// Also now we send these functionalities / reducers to the store to make the store aware of these reducers. The store will register these reducers and will update itself.
// Hence we export the list of reducers to store

export default todoSlice.reducer
// 4. go back to store.js now

