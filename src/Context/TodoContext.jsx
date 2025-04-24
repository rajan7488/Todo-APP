import { createContext,useContext } from "react";

export const TodoContext=createContext({
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:true,
        }
    ],
    addTodo:(todo)=>{},
    updatedTodo:(todo,id)=>{},
    deleteTodo:(todo,id)=>{},
    toggleCompleted:(todo,id)=>{},
})

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;