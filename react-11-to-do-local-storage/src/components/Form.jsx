import React, { useState } from 'react'
import { useTodo } from '../contexts';



function Form() {
// Defining state for an individual todo
    const [todo, setTodo] = useState("")

    // Now we want to define functionality here, but since it is in app.jsx, we need to bring it here.
    // One way of doing it is to use useTodo custom hook

    const{addTodo} = useTodo()
    // this will give us access to all functionalities, here we took addTodo 

    const add = (e) => {
        e.preventDefault()

        if(!todo) {
            return
            // if no todo is present, simple return
        }

        // todo present

        // addTodo(todo) => This method will not work as we have defined todo as an array of objects, hence we will do as follows ↓


        /*
        // addTodo({id: Date.now(), todo: todo, completed: false}) // todo is the message here
                // ↓
        
        // 🛑🛑🛑 Now go to addTodo function in App.jsx and see that we have written inside object:

        {id: Date.now(), ...todo} 

        this ...todo is the same value inside () above.

        Since we have written id, we can remove it, hence
        addTodo({id: Date.now(), todo: todo, completed: false}) => addTodo({todo: todo, completed: false})  

        Also we can write todo: todo as todo only hence,

        addTodo({todo: todo, completed: false}) => addTodo({todo, completed: false})

        */

        // Writing it below (...todo)

        addTodo({todo, completed: false})

        // Now this function add (e) calls a todo with the name todo. We need to clean up this value, for this we do:
        setTodo("") // where "" cleans any todo text
    }


    return (
        <form
        // doing form on submit, it adds a todo whenever we click submit
        onSubmit={add}  
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // Wiring input with state
                value={todo}
                // If there is any change in value
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
                {/* No need to call or define any functionality here as this is of type submit */}
            </button>
        </form>
    );
}

export default Form
// 5. Go To FormItem.jsx now 
