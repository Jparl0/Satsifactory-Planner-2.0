import React from 'react'
import NavBar from "./NavBar.js";
// import FactoryTreeClass from "./FactoryTreeClass.js";
// import FactoryTree from "./FactoryTree.js";

function TreeHolder({currentUser, setCurrentUser}) {


  return (
    <div>
        <header className="header">
            <h1>Personal Tree</h1>
        </header>                 
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        <div>
            {/* 
            <FactoryTreeClass />
            or
            <FactoryTree />
            */}
        </div>
        
    </div>
  )
}

export default TreeHolder