import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';

export default function TodoForm({closeForm}) {
  const[todos,setTodos]=useState("");
  const[alarmTime,setAlarmTime]=useState('');
  const[errors,setErrors]=useState({});

  const {addTodo}=useTodo();

  
  const handleAdd=()=>{
    const newErrors={};
    if(!todos.trim()){
      newErrors.todos="Todo title is required";
      console.log("Todo")
    }
    if(!alarmTime){
      newErrors.alarmTime="Alarm time is required"
      console.log("alarm")
    }
    setErrors(newErrors)
    if(Object.keys(newErrors).length===0){
      addTodo({
        todo:todos,
        alarmTime,
        completed:false,
      })
      setTodos("");
      setAlarmTime("");
      setErrors({});
      closeForm();
    }
  }

  return (
    <>
    <div className=' mt-12 ml-1 inset-shadow-xs rounded-md fixed  z-50  items-center justify-center flex bg-white'>
    <div className='  rounded-md p-4 shadow-md w-[340px]'>
      <h3 className='font-bold text-xl'>Add Todo</h3>
      <textarea 
      name="" 
      id=""
      value={todos}
      onChange={(e)=>{
        setTodos(e.target.value)
        setErrors((prev)=>({...prev,todos:''}))
      }}
      className={`w-full h-40 p-2 rounded-md mt-2 border ${
        errors.todos ? 'border-red-500' : 'border-gray-300 resize-none text-left'
      }`}
      />
      {errors.todos && <p className="text-red-500 text-sm mt-1">{errors.todos}</p>}
      <p className='mt-4'>Set alarm Time:</p>
      <input 
      type="datetime-local" 
      name="" 
      id=""
      value={alarmTime}
      onChange={(e)=>{
        setAlarmTime(e.target.value)
        setErrors((prev)=>({...prev,alarmTime:''}))
      }}
      className={`w-full p-2 rounded-md mt-2 border cursor-pointer ${
        errors.alarmTime ? 'border-red-500' : 'border-gray-300'
      }`} 
      />
      {errors.alarmTime&&<p className='text-red-500 text-sm mt-1"'>{errors.alarmTime}</p>}

      <div className='flex justify-between mt-4'>
        <button className="text-blue-600 cursor-pointer font-semibold text-xl" onClick={closeForm}>Cancel</button>
        <button className='text-blue-700 cursor-pointer font-bold text-xl' onClick={handleAdd}>Add</button>
      </div>
    </div>
    </div>
    </>
  )
}
