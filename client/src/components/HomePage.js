import React from "react";
import NavBar from "./NavBar.js";

function HomePage({currentUser, setCurrentUser}) {

    console.log(currentUser)

  return (
    <div className="main-page">
        <header className="header">
            <h1>Making A Satis-factory Plan</h1>
        </header>                 
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
    </div>
  )
}

export default HomePage