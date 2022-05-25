import React, {useState, useEffect} from 'react'
import ScoreBoardCards from './ScoreBoardCards'
import NavBar from "./NavBar.js";

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

      useEffect(() => {
        fetch('/board_ores')
        .then(r => r.json())
        .then(data => {
            console.log(data)
        })
      }, [])

  return (
    <div>
        <header className="header">
            <h1>
              {(currentUser.name) + "'s"} Score Board Page
            </h1>
        </header>
        <div>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        <div className='score-boards-holder'>
            {
                (boardOresData.filter(filteredBOs => filteredBOs.board.user_id === boardToCreateData.user.id)).map((mappedBoardOresData) => {
                    return (<ScoreBoardCards key={mappedBoardOresData.id} boardOresData={boardOresData} mappedBoardOresData={mappedBoardOresData}/>)
                })
            }
            
        </div>
    </div>
  )
}

export default ScoreBoardPage