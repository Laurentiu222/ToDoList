import React, { useState } from 'react'

export const EditTodoForm = ({editTodo , task}) => {

    const [value, setValue] = useState(task.task);

    const handleChange = (e) =>{
      const event = e.target.value;
      setValue(event);   
    }

    const handleSubmit = (e) =>{
      e.preventDefault();
      editTodo(value, task.id);
      setValue(""); 
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type="text" className="todo-input" placeholder='Update task' onChange={handleChange} value={value}/>
      <button type='submit' className="todo-btn">Update task</button>
    </form>
  )
}
