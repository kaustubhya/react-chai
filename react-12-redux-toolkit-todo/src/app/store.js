// Steps to make a store
// 1. Bring in Configure Store

import {configureStore} from '@reduxjs/toolkit';
// 2. Store is now done but it is not ready yet for use-case, so using this method, let us export a variable.

// **************** importing reducers list
import todoReducer from "../features/todo/todoSlice";
// *************** Now add the following keys in the configure store object 

export const store = configureStore({ // We export this store to main.jsx for wrapping
    reducer: todoReducer

    // 5. Go to components, addtodo.jsx and todo.jsx and do rfce on both
})

// Now we will make reducers
// 3. Go to src/features/todo/todoSlice.js 


// ******************** After coming back from todoSlice.js, we first import all reducers list