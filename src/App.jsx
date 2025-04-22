import { useEffect, useState } from 'react'
import './App.css'
import Home from './Components/Home'
import { TodoProvider } from './Context/TodoContext'

function App() {
  const[todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    setTodos((prev)=>[{id:Date.now(),...todo},...prev]);
  }

  const updatedTodo=(todo,id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=>prev.filter((prevTodo)=>prevTodo.id!==id))
  }

  const toggleCompleted=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?{...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(()=>{
    const todos=JSON.parse(localStorage.getItem('todos'));
    if(todos&&todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{addTodo,deleteTodo,updatedTodo,toggleCompleted}}>
    <div className='w-full'>
      <div className=' flex justify-center bg-gray-100 '>
        <div>         
        <Home todos={todos}/>
        </div>
        
      </div>
      
    </div>
    </TodoProvider>
  )
}

export default App
