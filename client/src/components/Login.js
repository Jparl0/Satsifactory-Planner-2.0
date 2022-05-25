import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"

function Login({currentUser, setCurrentUser}) {

    const navigate = useNavigate();

    const [userToLogin, updateUserToLogin] = useState(
        {
            username: "",
            password: ""
        }
    )

    function handleUserLoginDataOnChange (e) {
        updateUserToLogin({ ...userToLogin , [e.target.name]: e.target.value})
    }

    function handleLoginSubmit (e) {    
        e.preventDefault()
        fetch(`/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( userToLogin )
        })
        .then(r => r.json())
        .then(signedInUser => {
            if ((signedInUser.error === `Username or password don't match`) || (signedInUser.error === `Incorrect password`)) {
                alert(`Username or password don't match`)
            }
          else {
              setCurrentUser(signedInUser)
              navigate('/')
          }
        })
    }

  return (
    <div>
        <header className="header">
            <h1>
                Login
            </h1>
        </header>
        <div>
            <form onSubmit={handleLoginSubmit}>
                <label >User Name</label>
                <input onChange={handleUserLoginDataOnChange} type="text" id="username" name="username"></input>
                <label >Password</label>
                <input onChange={handleUserLoginDataOnChange} type="password" id="password" name="password"></input>
                <input className="submit-button" type="submit" value="Submit" />
            </form>
        </div>
    </div>

  )
}

export default Login