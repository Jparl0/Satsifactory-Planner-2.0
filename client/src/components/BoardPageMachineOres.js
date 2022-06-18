import React from 'react'

function BoardPageMachineOres({mappedMachineOresData, boardToCreateData}) {

  // console.log(mappedMachineOresData)

  return (
    <div className='MO-cards'>
        <h2>Board Attached: {mappedMachineOresData.board.name}</h2>
        <h4 className='white-black-border'>Machine/Ore Pair: {mappedMachineOresData.MO_name}</h4>
        {/* <p>Machine Attached: {mappedMachineOresData.machine.name}</p> */}
        
        {/* <p>Ore Purity: {mappedMachineOresData.ore.purity_level}</p> */}
        {/* <img 
            src={`${oreSrc}`}
            alt={mappedBoardsData.ore.name}
            className='ore-image'
        />  */}
        <p>Ore Per minute: {mappedMachineOresData.ore_mined}</p>
        <p>Total ore per hour from pair: {mappedMachineOresData.ore_mined * 60}</p>
        {/* <button id={mappedMachineOresData.id} >Select</button> */}
    </div>
  )
}

export default BoardPageMachineOres