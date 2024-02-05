
import React, { useState } from "react";
import Nav from "./assets/Nav";
import Form from "./assets/Form"
import Listgroup from "./Listgroup";




const App = () => {

  const [num, setnum] = useState(0);
  const increasenum = () => {
    setnum(num + 1);
    console.log(num)
  }

  const decreasenum = () =>{
    setnum(num - 1);
    console.log(num)
  }

  const [theme, settheme] = useState(true);

  const handletheme = () => {
    if (theme) {
      settheme(false)
    }
    else {
      settheme(true)
    }
  }


  const [todos, settodos] = useState([
    { id: 1, text: "code" },
    { id: 2, text: "eat" },
    { id: 3, text: "sleep" },
    { id: 4, text: "repeat" }
  ])

  const [Edit, setEdit] = useState({
    todo: {},
    editMode: false,
  });

  const deletetodo = (id) => {
    settodos(todos.filter((item) => item.id !== id))

  }

  const addtodo = (text) => {
    const newtodo = {
      id: crypto.randomUUID(),
      text: text,
    }

    settodos([newtodo, ...todos])
  }

  const edittodo = (oldtodo) => {
    setEdit({
      todo: oldtodo,
      editMode: true,
    });
  }

  const updatetodo = (oldId, newText) => {
    settodos(
    todos.map(item => item.id === oldId ?{ id: oldId, text: newText} : item)
    )
    
    setEdit({
      todo:{},
      editMode:false,
    })

     }




return (
  <>

    <Nav theme={theme} />
    <button className="btn btn-dark " onClick={() => handletheme()}>change theme</button>
    <div className="container p-5">
      <h1 className="text-center">{num}</h1>
      <button className="btn btn-success rounded-5 my-3" onClick={() => increasenum()} > increase </button>
      <button className="btn btn-danger  rounded-5 my-3" onClick={() => decreasenum()} > decrease </button>
    </div>
    <Form addtodo={addtodo} Edit={Edit}  updatetodo={updatetodo}/>
    <Listgroup todos={todos} deletetodo={deletetodo} edittodo={edittodo} />

  </>
)
}

export default App

