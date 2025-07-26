import React from 'react'
import { Todo} from "../My_Components/Todo";

export default function 
Todos(props) {
  return (
    <div className = "container">
      <h3>Todos List</h3>
      <Todo todo={props.Todos[0]}/>
    </div>
  )
}
