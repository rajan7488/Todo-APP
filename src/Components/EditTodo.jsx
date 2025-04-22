import React from 'react'
import { useState } from 'react';
import { useTodo } from '../Context/TodoContext';
export default function EditTodo({todo,onCancel}) {
    const[text,setText]=useState(todo.todo||'');
    const[alarmTime,setAlarmTime]=useState(todo.alarmTime||'');
     const[errors,setErrors]=useState({});

    const {updatedTodo}=useTodo()

    const handleSave=()=>{
        const newErrors={};
        if(!text.trim()){
          newErrors.todos="Todo title is required";
          console.log("Todo")
        }
        if(!alarmTime){
          newErrors.alarmTime="Alarm time is required"
          console.log("alarm")
        }
        setErrors(newErrors)
        if(Object.keys(newErrors).length===0){
            updatedTodo({
                ...todo,
                todo:text,
                alarmTime,
                
            },todo.id)
                    setAlarmTime('');
        setText('');
        setErrors({});
        onCancel();
        }

    }
  return (
    <div className=' mt-12 ml-1 inset-shadow-xs rounded-md fixed  z-50  items-center justify-center flex bg-white'>
      <div className='rounded-md p-4 shadow-md w-[340px]'>
      <h3 className='font-bold text-xl'>Edit Todo</h3>
      <textarea 
      name="" 
      id=""
      value={text}
      onChange={(e)=>{
        setText(e.target.value);
        setErrors((prev)=>({...prev,todos:''}))
    }}
      className={`w-full h-40 p-2 rounded-md mt-2 border  resize-none text-left ${
        errors.todos ? 'border-red-500' : 'border-gray-300'
      }`}
      >
    </textarea>
    {errors.todos && <p className="text-red-500 text-sm ">{errors.todos}</p>}

    <p className='mt-4'>Set alarm Time:</p>
    <input 
      type="datetime-local" 
      name="" 
      id=""
      value={alarmTime}
      onChange={(e)=>{
        setAlarmTime(e.target.value);
        setErrors((prev)=>({...prev,alarmTime:''}))
    }}
      className={`w-full p-2 rounded-md mt-2 border cursor-pointer ${
        errors.alarmTime ? 'border-red-500' : 'border-gray-300'
      }`} 
      />
      {errors.alarmTime&&<p className='text-red-500 text-sm mt-1"'>{errors.alarmTime}</p>}

    <div className="flex justify-between mt-4 ml-4 mr-4">
          <button
            onClick={onCancel}
            className="text-blue-500 text-xl cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-blue-600 font-bold text-lg cursor-pointer"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
