// Now the way of maintaining and keeping file structure is different in different companies.

// You can keep store anywhere

// Steps:
// 1. Configure a store
// 2. Tell the store about all the reducers present.

// 🛑 Store always comes from reduxjs and not react redux

import {configureStore} from '@reduxjs/toolkit';

// make a store
const store = configureStore({
    // inside keep reducers (as an object)
    reducer: {
        // rn it is empty
    }
});
// object inside this configure store


// make one more store to keep track of all the authentications
// (for that we have made a slice for it)



// export the store
export default store;

// 8. Go to authSlice.js