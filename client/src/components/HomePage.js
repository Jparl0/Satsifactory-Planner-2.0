import React, {useState} from "react";
import NavBar from "./NavBar.js";

function HomePage({currentUser, setCurrentUser}) {



    
  return (
    <div className="main-page">
    <header className="header">
        <h1>Satis-factory Planner</h1>
    </header>                 
    <div>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    </div>
    <div>
        {/* <FactoryTree currentUser={currentUser} setCurrentUser={setCurrentUser}/> */}
    </div>

</div>

  )
}

export default HomePage