import React from 'react'
import {useNavigate} from "react-router-dom"

function BoardSelector({mappedBoardsData, userBoardsData, findUserBoardsData, postBoardToCreateData, boardToCreateData}) {

    const navigate = useNavigate();

    function selectBoard (e) {
        fetch(`/boards/${e.target.id}`)
        .then(r => r.json())
        .then(indexedBoardData => { 
            if (boardToCreateData.name !== '') {
              postBoardToCreateData({board_id: (indexedBoardData.id), name: (indexedBoardData.name)})  
              navigate('/BoardPage')
            }
            postBoardToCreateData({board_id: (indexedBoardData.id), name: (indexedBoardData.name)}) 
            // console.log(indexedBoardData)
            console.log(boardToCreateData)
        })
}

  return (
    <div className='board-cards'>
        <h2>Board Name: {mappedBoardsData.name}</h2> 
        <p>Ores Attached: {mappedBoardsData.board_ores.length}</p>
        {/* <img 
            src={`${oreSrc}`}
            alt={mappedBoardsData.ore.name}
            className='ore-image'
        />  */}
        <p>Machines: {mappedBoardsData.machine_ores.length}</p>
        {/* <h3>Potential Ore Mined: </h3> */}
        <button id={mappedBoardsData.id} onClick={selectBoard}>Select</button>
    
    </div>
  )
}

export default BoardSelector