import {createContext, useContext} from "react"

export const TodoContext = createContext({
// This line makes/creates TodoContext

// Now one thing to notice here,

// In the theme switcher project we used a variable where we passed a string which was changed to light or dark

// This Todo here is an Array of objects with multiple functionalities (we will talk about the functionalities later)
// So a basic todo will have the following elements inside the object

/* 
{
    // elements with default values
    id: 1,
    todo: " Todo msg",
    completed: false
}

This was same as: themeMode: dark
*/

// Let us write it then (Array of objects)

    todos: [
        {
            id: 1, 
            todo: " Todo msg",
            completed: false,
        }
    ],

    // Also like last time we made some functions (though we did not include their functionalities here, we did that in App.jsx. In last project, we made functions of light and dark where we changed the theme)

    // Let us do the same (write only functions with names, add functionalities later)

    addTodo: (todo) => {}, // Todo here means, add a message
    updateTodo: (id, todo) => {},
    // Here we updated a whole toDo, not just toggled it. We passed the id to show which todo to update and updated that whole todo. Todo here means, update the message
    deleteTodo: (id) => {},
    // Here we will use only id as during deletion, we might not need to update the message
    toggleComplete: (id) => {}
    // Normally we see that in todo, when we complete an item, we strike it off, here, we will use a checkbox as a toggle, showing that if we have completed a task, we will click that checkbox and the task (todo task) will be striked off and that box will be highlighted.
    // For this use only id

    // SO here we have defined various components and their functions (names only). We will do component re-usability from here



})



// We don't want to put ToDocontext inside useContext and import it again and again, hence we use a useTodo custom hook. Write it once and call it whenever you need it
export const useTodo = () => {
    return useContext(TodoContext)
    // this useContext here needs a context, so we are doing it here instead of the main file and export it

    // Always give a context inside useContext
    // Context means kiske baare mein baat ho rahi hai, here we are talking about ToDoContext, hence we pass it to useContext   

    // Another reason for making this is, we see that there are many methods in TodoContext, here we made this method to help us export it all at once whenever we do it 
}

// Let us write the Provider code which will help us in wrapping

export const TodoProvider = TodoContext.Provider 

// 2. Go to index.js