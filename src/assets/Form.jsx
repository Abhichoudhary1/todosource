import React, { useEffect, useState } from 'react'



const Form = ({addtodo, Edit , updatetodo}) => {

  const[text, settext] = useState("")
  const handlesubmit = (e) =>{
    e.preventDefault()
    if (Edit.editMode) {
      updatetodo(Edit.todo.id,text)
    }else{
      addtodo(text)
    }
    settext(" ")
  }

  useEffect(()=>{
    settext(Edit.todo.text)
  }, [Edit])
  return (
    <div>
          <form className="my-3" onSubmit={(e)=>handlesubmit(e)} >
      <input
        type="text"
        placeholder="Enter Text Here"
        className="form-control rounded-0 my-2" 
        value={text}
        onChange={(e)=> settext(e.target.value)}
      />
      <button className="btn btn-success rounded-0 w-100 my-3">Save</button>
    </form>
    </div>
  )
}

export default Form
