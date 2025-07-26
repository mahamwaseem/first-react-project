import React from 'react'
import { TodoItem} from "../My_Components/TodoItem";

export default function 
Todos(props) {
  return (
    <div className = "container">
      <h3>Todos List</h3>
      <TodoItem todo={props.todos[0]}/>
    </div>
  )
}
