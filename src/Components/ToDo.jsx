import React from 'react'

const ToDo = (props) => {

    
  return (
    <div className='flex justify-center gap-4'>
        <input type="checkbox" value={props.id} id={props.id} />
        <label htmlFor={props.id}>{props.title}</label>
        <button>Delete</button>
    </div>
  )
}

export default ToDo