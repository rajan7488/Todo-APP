import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';
import alarm from '../Icons/Alarm.svg'

export default function TodoItem({todo,onDelete,onEdit}) {
    const {toggleCompleted}=useTodo()


    const toggleComplete=()=>{
        toggleCompleted(todo.id);
    }

  return (
    <>
<div className="flex justify-between items-center border-b border-gray-300 py-3">
  <div className="flex items-start gap-2">
    <span
      onClick={toggleComplete}
      className={`w-5 h-5 mt-4 rounded-full border border-gray-400 transition-all duration-400 ${
        todo.completed ? 'bg-blue-400' : 'bg-white'
      }`}
    ></span>

    <div>
      <p>{todo.todo}</p>
      <div className="flex items-center text-xs text-gray-400 mt-1 gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-gray-600"
        >
          <circle cx="12" cy="13" r="8" />
          <path d="M5 3 2 6" />
          <path d="m22 6-3-3" />
          <path d="M6.38 18.7 4 21" />
          <path d="M17.64 18.67 20 21" />
          <path d="m9 13 2 2 4-4" />
        </svg>
        <span>{todo.alarmTime}</span>
      </div>
    </div>
  </div>

  <div className="flex items-center  gap-2">
    <span className={`border-1 border-gray-300 w-3 h-3 transition-all duration-400  rounded-full ${todo.completed ? "bg-green-500":"bg-[#B678FF]"}`}></span>
    <button onClick={()=>onEdit(todo.id)}>
      <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className='w-5 h-4 font-bold hover:text-blue-800 cursor-pointer transition-all duration-150'>
        <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
      </svg>

    </button>

    <button onClick={() => onDelete(todo.id)} >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-4 h-4 hover:text-red-500 cursor-pointer transition-all duration-150"
      >
        <path
          fillRule="evenodd"
          d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>



    </>
  )
}
