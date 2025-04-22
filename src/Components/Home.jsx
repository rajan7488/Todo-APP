import { useEffect, useState } from 'react';
import React from 'react'
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import mobileSignal from '../Icons/MobileSignal.svg'
import { useTodo } from '../Context/TodoContext';
import ConfirmModal from './ConfirmModal';
import EditTodo from './EditTodo';

export default function Home({todos}){
    const { deleteTodo,updatedTodo } = useTodo();
    const[time,setTime]=useState(getCurrentTime())
    const[showForm,setShowForm]=useState(false);
    const[showModal,setShowModal]=useState(false);
    const [selectedTodoId, setSelectedTodoId] = useState(null);
    const[showEditModal,setShowEditModal]=useState(false);
    const[selectedTodo,setSelectedTodo]=useState(null)

    function getCurrentTime(){
        const now=new Date();
        return now.toLocaleTimeString([],{
            hour:'2-digit',
            minute:'2-digit',
            hour12:true,
        });
    }

    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(getCurrentTime());
        },1000)
        return()=>clearInterval(timer)
    },[]);

    const handleButton=()=>{
        setShowForm(true);
        console.log(showForm)
    }

    const handleEditButton = (id) => {
      const todo = todos.find((t) => t.id === id);
      setSelectedTodo(todo);                      
      setShowEditModal(true);
    };


    const handleDeleteClick = (id) => {
      setShowModal(true);
      setSelectedTodoId(id);
    };

    const confirmDelete = () => {
      deleteTodo(selectedTodoId);
      setShowModal(false);
      setSelectedTodoId(null);
    };

    const cancelDelete=()=>{
      setShowModal(false);
      setSelectedTodoId(null)
    }

    const cancelEdit=()=>{
      setShowEditModal(false) 
      setSelectedTodo(null)
    }

    return (
        <>
        <div className={`h-screen bg-gray-100 flex items-center justify-center `}>
            <div className='bg-white w-[375px] h-[100vh] shadow-lg rounded-lg px-3'>
            <div className='flex justify-between items-center mb-6'>
                <span className='font-bold text-xl'>{time}</span>
                <div className='flex gap-1'>
                <img src={mobileSignal} alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className='w-4 h-4'>
  <path fillRule="evenodd" d="M.676 6.941A12.964 12.964 0 0 1 10 3c3.657 0 6.963 1.511 9.324 3.941a.75.75 0 0 1-.008 1.053l-.353.354a.75.75 0 0 1-1.069-.008C15.894 6.28 13.097 5 10 5 6.903 5 4.106 6.28 2.106 8.34a.75.75 0 0 1-1.069.008l-.353-.354a.75.75 0 0 1-.008-1.053Zm2.825 2.833A8.976 8.976 0 0 1 10 7a8.976 8.976 0 0 1 6.499 2.774.75.75 0 0 1-.011 1.049l-.354.354a.75.75 0 0 1-1.072-.012A6.978 6.978 0 0 0 10 9c-1.99 0-3.786.83-5.061 2.165a.75.75 0 0 1-1.073.012l-.354-.354a.75.75 0 0 1-.01-1.05Zm2.82 2.84A4.989 4.989 0 0 1 10 11c1.456 0 2.767.623 3.68 1.614a.75.75 0 0 1-.022 1.039l-.354.354a.75.75 0 0 1-1.085-.026A2.99 2.99 0 0 0 10 13c-.88 0-1.67.377-2.22.981a.75.75 0 0 1-1.084.026l-.354-.354a.75.75 0 0 1-.021-1.039Zm2.795 2.752a1.248 1.248 0 0 1 1.768 0 .75.75 0 0 1 0 1.06l-.354.354a.75.75 0 0 1-1.06 0l-.354-.353a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
</svg>
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 20 20" 
  fill="currentColor" 
  className="w-4 h-4"
>
  <path d="M4.75 8a.75.75 0 0 0-.75.75v2.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-.75-.75h-9.5Z" />
  <path 
    fillRule="evenodd" 
    clipRule="evenodd" 
    d="M1 7.25A2.25 2.25 0 0 1 3.25 5h12.5A2.25 2.25 0 0 1 18 7.25v1.085a1.5 1.5 0 0 1 1 1.415v.5a1.5 1.5 0 0 1-1 1.415v1.085A2.25 2.25 0 0 1 15.75 15H3.25A2.25 2.25 0 0 1 1 12.75v-5.5Zm2.25-.75a.75.75 0 0 0-.75.75v5.5c0 .414.336.75.75.75h12.5a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75H3.25Z" 
  />
</svg>

                </div>
            </div>
            <div className='flex  justify-between '>
                <h2 className='text-xl font-bold'>Today</h2>
                <button className='rounded-full border-2 border-blue-500 p-1 cursor-pointer hover:border-blue-800' onClick={handleButton}>
                <svg 
           xmlns="http://www.w3.org/2000/svg" 
           fill="none" 
           viewBox="0 0 24 24"  
           stroke="currentColor" 
           className="w-4 h-4 text-blue-600 hover:text-blue-800 transition-colors duration-200"
           >
             <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M12 4.5v15m7.5-7.5h-15" 
                />
               </svg>

                </button>
            </div>

            <div >
                {showForm?(<TodoForm  closeForm={()=>setShowForm(false)}/>):todos.length===0?
                (<h5 className='text-center mt-14 text-2xl text-gray-500'>Add task...</h5>):null}
                {showEditModal&&selectedTodo&&(<EditTodo  onCancel={cancelEdit} todo={selectedTodo}/>)}
            </div>
                    <div className='mt-5'>
                      {todos.map((todo)=>{
                        return(
                          
                            <TodoItem todo={todo} key={todo.id}  onDelete={handleDeleteClick} onEdit={handleEditButton}/>
                          
                        )
                      })}
                    </div>
                    {showModal && (
    <ConfirmModal
      message="Are you sure you want to delete this todo?"
      onConfirm={confirmDelete}
      onCancel={cancelDelete}
    />
  )}
        
            </div>
        </div>
        </>
    )
}