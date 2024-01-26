import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function FormItem({ todo }) {

  // Now this form has a few functionalities,
  /*
  1. Toggle checkbox that tells you to strike the todo when done 
  2. Edit the todo and then save it, when not in edit StrictMode, it is readOnly 
  3. Delete Todo 
  */ 

  // Also let us define the state for each todo 
  // Here we do it for the upDate Todo functionality

  const [isTodoEditable, setIsTodoEditable] = useState(false)
  // By default, todo is not editable and we are in readonly mode

  // Now when we click on edit button in todo, we have to take in a new message to update
  const[todoMsg, setTodoMsg] = useState(todo.todo)
  // Here the first todo is an individual todo object and the second one is the todo message element inside this todo object (see at the top, in the function, we passed the first todo as an object {todo})
  // Also in jsx below, we will pass it in the form of a loop where in each iteration, we will get one todo object for one todo having all property elements like id, completed and todo (todo message here)



  // To get the functionalities, first bring in the context, you can bring it in via useTodo
  const {updateTodo, deleteTodo, toggleComplete} = useTodo() 

  // Now we are defining functionality for editing the todo
  const editTodo = () => {
    // Edit todo is an inbuilt functionality

    updateTodo(todo.id, {...todo, todo: todoMsg})
    // originally, it looks like this:  updateTodo(id, todo)
    // Now this todo here is an object so we do {todo} => {...todo, todo: todoMsg}
    // Here we spread out all todo elements, and we update the todo message from those elements

    // Now we have updated the todo, so we set is todo editable back to false again

    setIsTodoEditable(false)

    // Now working on toggle functionality (we did all in App.jsx, so we will here just call the functionality)
  }

  
  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }

  // Here I got an error, I was not able to declare toggleCompleted as I put it inside previous functions bracket

    

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
              // Instead of making another delete functionality, we did our work here only
          >
              ❌
          </button>
      </div>
  );
}

export default FormItem;

// 6. Now go from FormItem.jsx to App.jsx to add return components

