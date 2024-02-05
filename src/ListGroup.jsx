import React from 'react'
import Listitem from './assets/Listitem'

const Listgroup = ({todos, deletetodo, edittodo}) => {
    return (
        <ul className="list-group my-3">
               {todos.map((todo) => {
                   return <Listitem key={todo.id} todo={todo} deletetodo={deletetodo} edittodo={edittodo}/>
                })}
        </ul>
    );
};

export default Listgroup
