import React from 'react'
import {useNavigate} from "react-router-dom"

function BoardSelector({mappedBoardsData, postBoardToCreateData, boardToCreateData}) {

    const navigate = useNavigate();

    function selectBoard (e) {
        fetch(`/boards/${e.target.id}`)
        .then(r => r.json())
        .then(indexedBoardData => { 
          // console.log(indexedBoardData)
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

  // function handleBoardOrePost (e) {
  //   e.preventDefault()
  //   fetch(`/machine_ores`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify( machineAndOreToCreateData )
  //   })
  //   .then(r => r.json())
  //   .then(() => {
  //     fetch(`/board_ores`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify( boardOreToCreateData )
  //     })
  //     .then(r => r.json())
  //     .then(() => {})
  //     navigate(`/ScoreBoardPage`)
  //   })
  // }
//   function selectBoard (e) {    
//     e.preventDefault()
//     fetch(`/boardSelection`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify( userToLogin )
//     })
//     .then(r => r.json())
//     .then(signedInUser => {
//         if ((signedInUser.error === `Incorrect password`)) {
//             alert(`Username or password don't match`)
//         }
//       else {
//           setCurrentUser(signedInUser)
//           navigate('/')
//       }
//     })
// }

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
        {/* <img 
            src={`${oreSrc}`}
            alt={mappedBoardsData.ore.name}
            className='ore-image'
        />  */}
        {/* <p>Machines: </p> */}
        {/* <h3>Potential Ore Mined: </h3> */}
        <button id={mappedBoardsData.id} onClick={selectBoard}>Select</button>
    </div>
  )
}

export default BoardSelector