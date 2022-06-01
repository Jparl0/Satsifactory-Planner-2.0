import React from 'react'
import NavBar from "./NavBar.js";
// import FactoryTreeClass from "./FactoryTreeClass.js";
// import FactoryTree from "./FactoryTree.js";

function TreeHolder({currentUser, setCurrentUser}) {


  return (
    <div>
        <header className="header">
            <h1>Personal Tree Coming Soon!</h1>
        </header>                 
        <div className='Nav-bar-container'>
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