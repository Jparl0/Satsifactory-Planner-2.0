import React, {useState, useEffect} from 'react'
import {useNavigate} from "react-router-dom"
import BoardPageMachineOres from './BoardPageMachineOres';
import NavBar from './NavBar';

function BoardPage({currentUser, setCurrentUser, boardToCreateData, postBoardToCreateData}) {

  const navigate = useNavigate();
  const [machineOresToFilterByBoard, setMachineOresToFilterByBoard] = useState([])
  const [machineAndOreToCreateData, postMachineAndOreToCreateData] = useState(
    {
        ore_mined: 0,
        MO_name: "",
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

  function handlePostMachineDataOnChange (e) {
    postMachineAndOreToCreateData({ ...machineAndOreToCreateData, [e.target.id]: parseInt(e.target.value), board_id: (boardToCreateData.id)})
    postBoardOreToCreateData({ ...boardOreToCreateData, ore_id: (machineAndOreToCreateData.ore_id), machine_id: (machineAndOreToCreateData.machine_id), board_id: (boardToCreateData.id)})
  }

  useEffect(() => {
    fetch('/machine_ores')
    .then(r => r.json())
    .then(data => {
      console.log(data)
      setMachineOresToFilterByBoard(data)
    })
  }, [])

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
  
  function updateMOoremined () {
    fetch('/machineOreMinedUpdate')
    .then(r => r.json())
    .then(() => {
      document.location.reload(true)
            alert("Pairs Updated")
    })
  }

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
      document.location.reload(true)
    })
  }

  return (
    <div>
        <header className="header">
            <h1>
              Machine/Ore to Board Linker
            </h1>
        </header>
        <div>
        <div className='Nav-bar-container'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
          <form onSubmit={handleBoardOrePost}>
          <label className='label-text'>Select Machine</label>
            <select onChange={handlePostMachineDataOnChange} id="machine_id">
              <option value="1">Miner</option>
              <option value="2">Miner Mk.2</option>
              <option value="3">Miner Mk.3</option>
            </select>
            <label className='label-text'>Select Ore</label>
            <select onChange={handlePostMachineDataOnChange} id="ore_id">
              <option value="1">Iron</option>
              <option value="2">Pure Iron</option>
              <option value="3">Impure Iron</option>
              <option value="4">Copper</option>
              <option value="5">Pure Copper</option>
              <option value="6">Impure Copper</option>
              <option value="7">Limestone</option>
              <option value="8">Pure Limestone</option>
              <option value="9">Impure Limestone</option>
            </select>
            <input className="submit-button" type="submit" value="Submit" />
          </form> 
        </div>
        <div className='update-button'>
          <button className='update-button' onClick={updateMOoremined}>Update pair data</button>
        </div>
        <div className='score-boards-holder'>
            {
                (machineOresToFilterByBoard.filter(filteredMachineOres => filteredMachineOres.board.name === boardToCreateData.name)).map((mappedMachineOresData) => {
                    return (<BoardPageMachineOres key={mappedMachineOresData.id} mappedMachineOresData={mappedMachineOresData} boardToCreateData={boardToCreateData}/>)
                })
            }
        </div>
    </div>
  )
}

export default BoardPage
