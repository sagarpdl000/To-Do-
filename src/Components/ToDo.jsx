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

  const isCompleted = props.completed ? 'checked' : ''; 

    
  return (
    <div className='grid grid-cols-2 justify-center gap-4 mt-2 md:mx-96 bg-slate-200'>

      <div className=''>
        <input type="checkbox" checked= {isCompleted} value={props.id} id={props.id} 
        onChange= {e=>completedTodo(e)}/>

        <label htmlFor={props.id}>{props.title}</label>
        
    </div>

    <div>
        <button id={props.id} onClick={e=>deleteTodo(e)} className='border-2 ml-2 bg-red-400 px'>Delete</button>
        </div>
        
    </div>
  )
}

export default ToDo