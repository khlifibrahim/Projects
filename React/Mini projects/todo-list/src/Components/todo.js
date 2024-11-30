import React, { useState } from 'react'
import trash from '../assets/trash.svg'


const Todo = ( {task}) => {
  return (
    <div className='bg-gray-500 flex items-start gap-3 p-8 rounded-lg text-gray-100'>
        <label class="flex items-center cursor-pointer relative basis-6">
          <input type="checkbox" class="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-blue-dark checked:bg-purple-dark checked:border-purple-dark" id="check" />
          <span class="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
            </svg>
          </span>
        </label>

      <p className='text-left basis-full'>{task}</p>
      <div className="delete basis-8 cursor-pointer">
        <img src={trash} alt="" className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}

export default Todo