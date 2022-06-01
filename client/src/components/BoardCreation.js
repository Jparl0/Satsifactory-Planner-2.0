import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import BoardSelector from './BoardSelector';
import NavBar from './NavBar';

function BoardCreation({currentUser, setCurrentUser, boardToCreateData, postBoardToCreateData}) {

    const navigate = useNavigate();

    const [userBoardsData, findUserBoardsData] = useState([])
    
    // console.log(userBoardsData)
    
    function handlePostBoardDataOnChange (e) {
      postBoardToCreateData({ ...boardToCreateData, [e.target.name]: e.target.value, user_id: currentUser.id})
    }

    useEffect(() => {
        fetch('/boards')
        .then(r => r.json())
        .then(indexedOreData => {
          findUserBoardsData(indexedOreData)
        })
      }, [])

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

    function boardPost (e) {
        e.preventDefault()
        fetch(`/boards`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify( boardToCreateData )
          })
        .then(r => r.json())
        .then(postedBoard => { 
            if (postedBoard.name === 'has already been taken') {
              alert("Board Name Taken! Try another name")
            }
            else {
              console.log(postedBoard)
              navigate('/BoardPage')
            }})
    }
  return (
    <div>
          <header className="header">
            <h1>
              Board Creation/Selection
            </h1>
          </header>
          <div className='Nav-bar-container'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          </div>
          <div>
            <form onSubmit={boardPost}>
              <label>New Board Name</label>
              <input onChange={handlePostBoardDataOnChange} type="name" id="board-post-input" name="name"></input>
              <input className="submit-button" type="submit" value="Submit" />
            </form>
          </div>
          <div className='score-boards-holder'>
            {
              (userBoardsData.filter(filteredBoards => filteredBoards.user_id === currentUser.id)).map((mappedBoardsData) => {
                return (<BoardSelector key={mappedBoardsData.id} currentUser={currentUser} mappedBoardsData={mappedBoardsData} userBoardsData={userBoardsData} findUserBoardsData={findUserBoardsData} boardToCreateData={boardToCreateData} postBoardToCreateData={postBoardToCreateData}/>)
              })
            }
          </div>
    </div>
  )
}

export default BoardCreation


// filter(filteredBoards => filteredBoards.board.user_id === boardToCreateData.user.id))
// 
// const [machineToCreateData, postMachineToCreateData] = useState(
//     {
//         name: "",
//         voltage: 0,
//         input: 0,
//         output: 0
//     }
// )

// console.log(machineToCreateData)

// function handlePostMachineDataOnChange (e) {

//   postMachineToCreateData({ ...machineToCreateData, [e.target.name]: e.target.value})

// }

// function handlePostMachineIntegerDataOnChange (e) {

//   postMachineToCreateData({ ...machineToCreateData, [e.target.name]: parseInt(e.target.value)})

// }

// <form onSubmit={machinePost}>
// <select onChange={handlePostMachineDataOnChange} name="name" id="machineName">
//   <option value="Miner">Miner</option>
//   <option value="Assembler">Assembler</option>
//   <option value="Constructor">Constructor</option>
// </select>
// <label >Voltage</label>
// <input onChange={handlePostMachineIntegerDataOnChange} type="number" id="voltage" name="voltage"></input>
// <input className="submit-button" type="submit" value="Submit" />
// </form> 