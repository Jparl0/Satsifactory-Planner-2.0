import React, {useState, useEffect} from 'react'
import ScoreBoardCards from './ScoreBoardCards'
import NavBar from "./NavBar.js";
// import FilterBoards from './FilterBoards';

function ScoreBoardPage({currentUser, setCurrentUser, boardToCreateData, postBoardToCreateData}) {

  const [ boardOresData, setBoardOresData ] = useState([])
  const [ filterValue, setFilterValue] = useState("")
  
    useEffect(() => {
        fetch('/board_ores')
        .then(r => r.json())
        .then(indexedBoardOresData => {
            setBoardOresData(indexedBoardOresData)
        })
      }, [])

  console.log(boardToCreateData)
  console.log(boardOresData)
 
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

      function handleFilterBoardName (e) {
        setFilterValue(e.target.value)
      }

      function renderCards () {
        let handledBoardByName = []
        if (filterValue == "") {
          handledBoardByName = (boardOresData.filter(filteredBOs => filteredBOs.board.user_id === boardToCreateData.user.id)).map((mappedBoardOresData) => {
            return (<ScoreBoardCards key={mappedBoardOresData.id} mappedBoardOresData={mappedBoardOresData}/>)
          })
      }
       else (
        handledBoardByName = (boardOresData.filter(filteredBOs => filteredBOs.board.name === filterValue)).map((mappedBoardOresData) => {
          return (<ScoreBoardCards key={mappedBoardOresData.id} mappedBoardOresData={mappedBoardOresData}/>)
        })
       )
       return handledBoardByName
      }

      function renderFilterBoardSelect () {
        let resultsOfMap = [];
        if (currentUser !== false) {
              resultsOfMap = (currentUser.boards).map((board) => {
                return (
                  <option value={board.name}>{board.name}</option>
                )
              })
        }
        return resultsOfMap
      }  
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
            <select onChange={handleFilterBoardName} name="board-names-list" id="board-names-list">
              <option value="" selected>All</option>             
              {
                renderFilterBoardSelect()
              }
            </select>
          </form> 
        
        </div>
        <div className='score-boards-holder'>
            {
              renderCards()
            }
        </div>
    </div>
  )
}

export default ScoreBoardPage