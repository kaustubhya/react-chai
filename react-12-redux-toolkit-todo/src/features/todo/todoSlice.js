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

        addTodo: () => {},
        // Method 2
        removeTodo: () => {}
        
        // Now in context API, we only declared the function and not initialize and write it
        // Here we will initialize as well as write it

        // 🛑🛑🛑🛑 Now just like useState and useEffect we get 2 things inside addTodo function (state, action), we will have access to both here always
        // State here gives us access to all the default values present already inside the initialState
        // As for action, we get those values from it which we want to use in a funciton, say to remove a todo, a need an ID, this ID, we will get it from action.
        
        
    }

})
