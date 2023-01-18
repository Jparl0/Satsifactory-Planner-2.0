import React from 'react'
import {useNavigate} from "react-router-dom"

function BoardSelector({mappedBoardsData, postBoardToCreateData, boardToCreateData}) {

    const navigate = useNavigate();

    function selectBoard (e) {
        fetch(`/boards/${e.target.id}`)
        .then(r => r.json())
        .then(indexedBoardData => { 
          fetch(`/boardSelection`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(indexedBoardData)
            })
            .then(r => r.json())
            .then(selectedBoard => {
                if ((selectedBoard.error === `Unable to find Board`)) {
                    alert(`Unable to find Board`)
                }
              else {
                postBoardToCreateData(selectedBoard)
                navigate('/ScoreBoardPage')
              }
            })
          })
    }

  return (
    <div className='board-cards'>
        <h2>Board Name: {mappedBoardsData.name}</h2> 
        <h4>Machine/Ore Pairs: </h4>
          {
            (mappedBoardsData.board_ores).map(mappedBOs => {
              return ( 
              <div key={mappedBOs.id} className="board-BO-data">
                <p>Pair Name: {mappedBOs.machine_ores.MO_name}</p>
                <p>Ore mined per minute: {mappedBOs.machine_ores.ore_mined} </p>
                <p>Total ore from Pair: {mappedBOs.ore_amount}</p>
                <p></p>
              </div>)
            })
          }
        <button id={mappedBoardsData.id} onClick={selectBoard}>Select</button>
    </div>
  )
}

export default BoardSelector