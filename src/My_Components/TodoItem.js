import React from 'react'

export const TodoItem = ({todo, onDelete})=> {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button classsName = "btn btn-sm btn-danger" onClick = {onDelete}>Delete</button>
    </div>
  )
}
