import React, {useState, useEffect} from 'react'
import ScoreBoardCards from './ScoreBoardCards'
import NavBar from "./NavBar.js";
import FilterBoards from './FilterBoards';

function ScoreBoardPage({currentUser, setCurrentUser, boardToCreateData, postBoardToCreateData}) {

  const [ boardOresData, setBoardOresData ] = useState([])
  console.log(currentUser)

    useEffect(() => {
        fetch('/board_ores')
        .then(r => r.json())
        .then(indexedBoardOresData => {
            setBoardOresData(indexedBoardOresData)
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

      useEffect(() => {
        fetch("/getSelectedBoard")
        .then(r => r.json())
        .then(boardSelected => {
          console.log(boardSelected)
          if (boardSelected.error !== "No Board Selected") {
            postBoardToCreateData(boardSelected)
          }
          else {
            console.log(boardSelected)
          }
        })
      }, [])

      
      function renderFilterBoardSelect () {
        if (boardOresData !== false) {
              (boardOresData.boards).map(board => {
                return (
                  <option value={board.name}>{board.name}</option>
                )
              })
          // (boardOresData.boards).forEach(board => {
          //   return (
          //     <option value={board.name}>{board.name}</option>
          //   )
          // })
        }
        else {
          console.log(boardOresData)
        }
      }
    // console.log(boardToCreateData)
  
  return (
    <div>
        <header className="header">
            <h1>
              {(currentUser.name) + "'s"} Board Page
            </h1>
        </header>
        <div className='Nav-bar-container'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        <div>
          <form>
            <label className='label-text'>Filter by Board Name</label>
            <select name="board-names-list" id="board-names-list">
              {
                // renderFilterBoardSelect()
              }
            </select>
          </form> 
        
        </div>
        <div className='score-boards-holder'>
            {
                (boardOresData.filter(filteredBOs => filteredBOs.board.user_id === boardToCreateData.user.id)).map((mappedBoardOresData) => {
                    return (<ScoreBoardCards key={mappedBoardOresData.id} mappedBoardOresData={mappedBoardOresData}/>)
                })
            }
        </div>
    </div>
  )
}

export default ScoreBoardPage






// (boardOresData.filter(filteredBOs => filteredBOs.board.user_id === boardToCreateData.user.id )).map((mappedBoardOresData) => {
//   return (<ScoreBoardCards key={mappedBoardOresData.id} boardOresData={boardOresData} mappedBoardOresData={mappedBoardOresData}/>)
// })

// (boardOresData.filter(filteredBOs => 

// THIS IS PROBLEM LINE, SOMETHING WRONG WITH BOARD.user.id
//   filteredBOs.board.user_id === boardToCreateData.user.id 
  
//   )).map((mappedBoardOresData) => {
//   return (<ScoreBoardCards key={mappedBoardOresData.id} boardOresData={boardOresData} mappedBoardOresData={mappedBoardOresData}/>)
// })