import React from 'react'

export default function Todo({todo,deleteTodo}) {
  return (
    <div>
<p>{todo.task + ' ' + todo.id}</p>
<p>{todo.done?<span>Finished</span>:<span>Pending</span>}</p>
<button onClick={() =>{
    deleteTodo(todo.id)
}}>Delete Todo</button>
    </div>
  )
}
