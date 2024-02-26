import React, { useContext } from 'react'
import { TodoContext } from '../Context/TodoContext';

const ToDo = (props) => {

  const [todos,setTodos] = useContext(TodoContext);
  
  const completedTodo = (e)=>{
    
    const filterTodos = todos.map((item)=>{
      if(item.id === e.target.value){

        item.completed = false;

        if(e.target.checked){

          item.completed = true;
        }
      }

      return item;
      

    })
    setTodos(filterTodos);
    
  }

  const deleteTodo = (e)=>{
    e.preventDefault();

    const filteredTodo = todos.filter((item)=>{
      return item.id !== e.target.id;
    })
    setTodos(filteredTodo);
  }

    
  return (
    <div className='flex justify-center gap-4'>
        <input type="checkbox" value={props.id} id={props.id} 
        onChange= {e=>completedTodo(e)}/>

        <label htmlFor={props.id}>{props.title}</label>
        <button id={props.id} onClick={e=>deleteTodo(e)}>Delete</button>
    </div>
  )
}

export default ToDo