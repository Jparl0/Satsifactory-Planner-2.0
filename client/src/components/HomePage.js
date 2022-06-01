import React, {useEffect} from "react";
import NavBar from "./NavBar.js";

function HomePage({currentUser, setCurrentUser}) {

    console.log(currentUser)

    // useEffect(() => {
    //   fetch("/userInSession")
    //   .then(r => r.json())
    //   .then(userLoggedIn => {
    //     if (userLoggedIn.error !== "No User Logged In") {
    //       setCurrentUser(userLoggedIn)
    //     }
    //     else {
    //       setCurrentUser(false)
    //     }
    //   })
    // }, [])


  return (
    <div className="main-page">
        <header className="header">
            <h1>Satisfactory Planner</h1>
            <h2>Make a Satis-factory Plan!</h2>
        </header>                 
        <div className='Nav-bar-container'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        <div>
          <p>
            LONG TEXT HERE ABOUT SUMMARY OF PROJECT!!!!!!!!!!!
          </p>
          <iframe src='https://gfycat.com/ifr/FalseWateryBigmouthbass' frameborder='0' scrolling='no' width='640' height='404'></iframe>
        </div>
    </div>
  )
}

export default HomePage