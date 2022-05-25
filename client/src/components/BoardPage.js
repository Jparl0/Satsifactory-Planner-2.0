import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"

function BoardPage({currentUser, setCurrentUser, boardToCreateData, postBoardToCreateData}) {

  // console.log(boardToCreateData)

  const navigate = useNavigate();

  const [machineAndOreToCreateData, postMachineAndOreToCreateData] = useState(
    {
        ore_mined: 0,
        board_id: 0, 
        ore_id: 0, 
        machine_id: 0
    }
)

const [boardOreToCreateData, postBoardOreToCreateData] = useState(
  {
      ore_amount: 0,
      board_id: 0, 
      ore_id: 0, 
      machine_id: 0
  }
)
  // console.log(boardOreToCreateData)

  function handlePostMachineDataOnChange (e) {
    postMachineAndOreToCreateData({ ...machineAndOreToCreateData, [e.target.name]: parseInt(e.target.value), board_id: (boardToCreateData.id)})
    postBoardOreToCreateData({ ...boardOreToCreateData, ore_id: (machineAndOreToCreateData.ore_id), machine_id: (machineAndOreToCreateData.machine_id), board_id: (boardToCreateData.id)})
    
  }

  // useEffect(() => {
  //   fetch('/machine_ores')
  //   .then(r => r.json())
  //   .then(data => {
  //       console.log(data)
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch('/board_ores')
  //   .then(r => r.json())
  //   .then(data => {
  //       console.log(data)
  //   })
  // }, [])
  
  function handleBoardOrePost (e) {
    e.preventDefault()
    fetch(`/machine_ores`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( machineAndOreToCreateData )
    })
    .then(r => r.json())
    .then(() => {
      fetch(`/board_ores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify( boardOreToCreateData )
      })
      .then(r => r.json())
      .then(() => {})
      navigate(`/ScoreBoardPage`)
    })
  }

  return (
    <div>
        <header className="header">
            <h1>
              Machine to Board Linker
            </h1>
        </header>
        <div>
          <form onSubmit={handleBoardOrePost}>
          <label>Select Machine</label>
            <select onChange={handlePostMachineDataOnChange} name="machine_id" id="machineName">
              <option value="1">Miner</option>
              <option value="2">Assembler</option>
              <option value="3">Constructor</option>
            </select>
            <label>Select Ore</label>
            <select onChange={handlePostMachineDataOnChange} name="ore_id" id="oreName">
              <option value="2">Pure Iron</option>
              <option value="1">Iron</option>
              <option value="3">Impure Iron</option>
              <option value="6">Pure Copper</option>
              <option value="5">Copper</option>
              <option value="4">Impure Copper</option>
              <option value="7">Pure Limestone</option>
              <option value="8">Limestone</option>
              <option value="9">Impure Limestone</option>
            </select>
            <input className="submit-button" type="submit" value="Submit" />
          </form> 
        </div>
        
        
    </div>
  )
}

export default BoardPage