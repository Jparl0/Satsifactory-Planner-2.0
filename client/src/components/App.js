import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AboutPage from "./AboutPage.js";
import BoardCreation from "./BoardCreation.js";
import BoardPage from "./BoardPage.js";
import HomePage from "./HomePage.js";
import Login from "./Login.js";
import ScoreBoardPage from "./ScoreBoardPage.js";
import TreeHolder from "./TreeHolder.js";

function App() {

  const [currentUser, setCurrentUser] = useState(false)

  const [boardToCreateData, postBoardToCreateData] = useState({name: ""})

  // maybe take this out of useeffect to fix async? 
  // this will cause page to rerender everytime on 

  // removing this prevents cards from rendering
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
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path='/AboutPage' element={<AboutPage currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path='/Login' element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
          <Route path='/BoardPage' element={<BoardPage currentUser={currentUser} setCurrentUser={setCurrentUser} boardToCreateData={boardToCreateData} postBoardToCreateData={postBoardToCreateData} />} />
          <Route path='/BoardCreation' element={<BoardCreation currentUser={currentUser} setCurrentUser={setCurrentUser} boardToCreateData={boardToCreateData} postBoardToCreateData={postBoardToCreateData}/>} />
          <Route path='/ScoreBoardPage' element={<ScoreBoardPage currentUser={currentUser} setCurrentUser={setCurrentUser} boardToCreateData={boardToCreateData} postBoardToCreateData={postBoardToCreateData}/>} />
          <Route path='/TreeHolder' element={<TreeHolder currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
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