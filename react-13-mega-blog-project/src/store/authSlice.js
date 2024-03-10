import {createSlice} from "@reduxjs/toolkit"

// What is this slice about, it tracks user Authentication and everytime it asks the store everytime if the user is authenticated or not.

// What all it needs?
// make the slice
// give initial state
// mention all reducer functionalities aka actions inside it etc.

// giving the slice the following:

// giving initial state
const initialState = {
    status: false,
    // rn user is not logged in by default

    userData: null
    // by default, there is no user data
}

// naming slice:

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // each function in a reducer has access to: state , action
        // action gives us the payload
        // state updates the values of initial state that we give to it.


        // 🛑🛑🛑🛑 reducer functions AKA "🛑Actions"
        login: (state, action) => { 
            state.status = true;
            // this will connect us to initial state where its state value is updated from false to true

            state.userData = action.payload.userData;
            // initial state's userData will be updated via this. Data will come from payload's userData via action

            // Say State and Action are 2 Cars (Gaadi)
            // 🛑🛑 State => Take away to update (State waali Gaadi Gayi update karne initial state ko values leke)

            // 🛑🛑 Action => Action waali Gaadi payload naam ke box ko apne saath le ke aayi hai. Us box mein updated values hai. Ye gaadi fir, payload naam ke box ko state waali gaadi ko de degi, to update initial state 

            // No need to spread values in redux toolkit, it is already been taken care of by redux
        },

        logout: (state) => {
            // action is not needed here

            state.status = false;
            state.userData = null;

            // logout functionality does all this

        }



    }

});
// made the slice

// export the following from authSlice

// 1. Export each reducer functionality aka actions
export const {login, logout} = authSlice.actions;
// login and logout are actions that we export them individually

// 2. Reducer (as a whole)
export default authSlice.reducer;


// 💡💡💡 Assignment: We have to make another Slice for posts with actions: state.allposts, state.userposts etc

// 9. Make a new folder components, there make 2 more folders: Header and Footer
// Inside each folder, make Header.jsx and Footer.jsx respectively and do rfce() in each of them.
// Then go to index.js to export everything together





