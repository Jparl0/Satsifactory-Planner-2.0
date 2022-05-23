import React from 'react'



function NavBar({currentUser, setCurrentUser}) {

    function logUserOut(){
        fetch("/logOut", {method: "DELETE"})
        .then(r => r.json())
        .then( deleteResponse => {
            setCurrentUser([])
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
                    <a href="http://localhost:4000/">
                    Create Board
                    </a>
                </h3>
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