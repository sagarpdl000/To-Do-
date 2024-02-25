import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext';
import ToDo from './ToDo';

const ToDoList = () => {

    const [todos,setTodos] = useContext(TodoContext);

  return (

        1 <= todos.length ? todos.map((item)=>{

            return(
                < ToDo key = {item.id}

                id = {item.id}
                title = {item.title}
                completed = {item.completed}
                
                />
            )

        }) : (<h1>No list to show.</h1>)
    
  )
}

export default ToDoList