import React from 'react'

const Nav = ({theme}) => {
  return (
    <div>
      <nav className={theme ? "navbar bg-primary" : "navbar bg-dark"}>
        <div className="container-fluid">
         <span className="navbar-brand mb-0 h1">ultimate todo app</span>
         
        

        </div>
       

      </nav>
     

    </div>
  )
}

export default Nav
