import React, {useEffect} from 'react'
import {useNavigate} from "react-router-dom"

function NavBar({currentUser, setCurrentUser}) {

    const navigate = useNavigate();

    function logUserOut(){
        fetch("/logOut", {method: "DELETE"})
        .then(r => r.json())
        .then(() => {
            setCurrentUser(false)
            navigate("/")
        })
    }

    useEffect(() => {
        fetch("/userInSession")
        .then(r => r.json())
        .then(userLoggedIn => {
          if (userLoggedIn.error !== "No User Logged In") {
            setCurrentUser(userLoggedIn)
          }
          else {
            setCurrentUser(false)
          }
        })
      }, [])


  return (
    <div className="NavBar" id="nav-bar">
        <ul>
            <li>
                <h3>
                    <a href="http://localhost:4000/AboutPage">
                    About
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="http://localhost:4000/">
                    Home
                    </a>
                </h3>
            </li>
            <li>
                {/* ONLY SHOW WHEN USER NOT LOGGED IN */}
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
            </li>
            <li>
                <h3>
                    <a href="http://localhost:4000/BoardCreation">
                        Board Creation/Selection
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="http://localhost:4000/ScoreBoardPage">
                    Board View
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="http://localhost:4000/BoardPage">
                    Machine/Ore -> Board 
                    </a>
                </h3>
            </li>
            <li>
                <h3>
                    <a href="http://localhost:4000/TreeHolder">
                    Factory Tree
                    </a>
                </h3>
            </li>
            
        </ul>
    </div>
  )
}

export default NavBar