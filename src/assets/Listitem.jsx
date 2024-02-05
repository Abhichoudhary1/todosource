import React from 'react'

const Listitem = ({todo, deletetodo, edittodo}) => {
  return (
    <li className="list-group-item rounded-0" >{todo.text}  
    <button className="btn  btn-sm rounded-0 btn-danger float-end " onClick={()=>deletetodo(todo.id)}>Delete</button>
    <button className="btn  btn-sm rounded-0 btn-warning float-end "onClick={()=>edittodo(todo)} >Edit</button>
  </li> 
  )
}

export default Listitem
