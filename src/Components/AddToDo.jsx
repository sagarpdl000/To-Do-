import React, { useContext, useState } from 'react'
import { TodoContext } from '../Context/TodoContext';
import {v4 as uuid} from 'uuid';


const AddToDo = () => {

    const [title, setTitle] = useState(' ');

    const [todos, setTodos] = useContext(TodoContext);

    const addTodo =(e)=>{
      e.preventDefault();

      if(''===title || undefined === title){
        alert('Field cannot be empty');
        return;
      }

      else{                              

        const newTodo = [...todos, {id: uuid(), title: title, completed : false}]; //UUID for unique id, npm i --save-dev uuid
        setTodos(newTodo);
        setTitle('')
        console.log(newTodo); 
      }
      

    }

  return (
    <div className='mt-2'>

        <input type="text" placeholder='Add your todo' className='border-2 border-black' value={title} onChange={e => setTitle(e.target.value)} />

        <button className='border-2 border-black ml-2' onClick={addTodo}>Add</button>
    </div>
  )
}

export default AddToDo