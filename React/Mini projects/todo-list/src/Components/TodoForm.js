import React, { useState } from 'react'
import plus from '../assets/plus.png'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')

  const handleSubmition = (e)=> {
    e.preventDefault()

    addTodo(value)
    setValue('')

  }

  return (
    <form onSubmit={handleSubmition} className='TodoForm translate-y-6 flex items-center justify-center gap-2'>
        <input 
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            className='bg-gray-500 text-gray-100 w-[451px] !h-[54px] px-8 placeholder:text-gray-300 border-gray-700 border-none rounded-[8px] outline-none hover:border-purple focus:outline-purple' 
            type="text" 
            placeholder='Add new todo'
            name="" id="" />
        <button 
            type="submit"
            className='bg-blue-dark text-gray-100 w-[90px] h-[52px] gap-2 flex items-center justify-center rounded-[8px] hover:bg-blue'
            >Add 
                <img src={plus} alt='' className='object-cover w-[16px] h-[16px]' />
            </button>
    </form>
  )
}

export default TodoForm