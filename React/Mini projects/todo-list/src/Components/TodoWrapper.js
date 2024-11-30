import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './todo'

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    // const randomId = 
    const addTodo = (todo) => {
        setTodos([...todos, {id: (todos.length + 1), task: todos, completed: false, isEdited: false}])
        console.log(todos)
    }

  return (
      <div>
          <div className="header bg-gray-700 h-52 flex flex-col justify-end">
              <div className="inner w-[553px] mx-auto">
                  <div className="head text-purple font-extrabold font-inter text-2xl">My ToDo</div>
                    <TodoForm addTodo={addTodo} />
              </div>
          </div>

          <div className="inner w-[553px] mx-auto mt-20 flex flex-col gap-6">
              <div className="statics flex items-center justify-between gap-2 ">

              </div>

              <div className="task-list flex flex-col gap-2">
                {todos.map((todo, i) => (
                    <Todo key={i} task={todo}/>
                    
                ))}
              </div>
          </div>
      </div>
  )
}

export default TodoWrapper