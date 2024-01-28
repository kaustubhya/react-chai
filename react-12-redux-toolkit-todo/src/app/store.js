// Steps to make a store
// 1. Bring in Configure Store

import {configureStore} from '@reduxjs/toolkit';
// 2. Store is now done but it is not ready yet for use-case, so using this method, let us export a variable.

export const store = configureStore({})

// Now we will make reducers
// 3. Go to src/features/todo/todoSlice.js 