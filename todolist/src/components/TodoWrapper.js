import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

uuidv4();

export const TodoWrapper = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>{
    setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEdited: false}])
    
  }

  const toggleComplet= (id)=>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo=> todo.id !== id))
  }

const editTodo = (id) =>{
  setTodos(todos.map(todo => todo.id === id ?{...todo, isEdited: !todo.isEdited} : todo))
}

const editTask = (task, id) => {
  setTodos(todos.map(todo => todo.id === id ? {...todo,task,isEdited: !todo.isEdited} : todo))
}

  return (
    <div className='TodoWrapper'>
      <h1>Getting things Done!</h1>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index) =>(
        todo.isEdited ? (
          <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo} key={index} toggleComplet={toggleComplet} deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
        
      ))}
      
    </div>
  )
}
