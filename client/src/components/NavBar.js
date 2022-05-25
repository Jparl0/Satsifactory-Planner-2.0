import React, {useState} from 'react'
// import {useNavigate} from "react-router-dom"

function NavBar({currentUser, setCurrentUser}) {

    // const navigate = useNavigate();

    function logUserOut(){
        fetch("/logOut", {method: "DELETE"})
        .then(r => r.json())
        .then(() => {
            setCurrentUser(false)
            // navigate("/")
        })
    }

  return (
    <div className="NavBar" id="nav-bar">
                <h3>
                    <a href="http://localhost:4000/">
                    Home Page
                    </a>
                </h3>
                <h3>
                    <a href="http://localhost:4000/BoardCreation">
                        Board Creation/Selection
                    </a>
                </h3>
                {/* <h3>
                    <a href="http://localhost:4000/ScoreBoardPage">
                    Personal Score Boards
                    </a>
                </h3> */}
                <h3>
                    {
                        currentUser ? 
                            <a onClick={logUserOut} href="http://localhost:4000/" >
                                Logout?  
                            </a>
                            :
                            <a href="http://localhost:4000/Login">
                                Login
                            </a>
                    }
                </h3>
    </div>
  )
}

export default NavBar