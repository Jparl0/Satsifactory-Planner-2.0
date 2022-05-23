import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./HomePage.js";
import Login from "./Login.js";



function App() {

  const [currentUser, setCurrentUser] = useState([])
  // console.log(currentUser)

  useEffect((currentUser) => {
    fetch("/userInSession")
    .then(r => r.json())
    .then(userLoggedIn => {
      setCurrentUser(userLoggedIn)
      console.log(currentUser)
    })
  }, [])


  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path='/Login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        </Routes>  
    </BrowserRouter>
    );
  }
  
  export default App;
  
  // <Route path='/' element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
  // <Route path='/CreatePage' element={<CreatePage />} />
  // 
  // <Route path='/MachineList' element={<MachineList />} />        
 // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>