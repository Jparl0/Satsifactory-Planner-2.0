import React from 'react'

function BoardPageMachineOres({mappedMachineOresData}) {

  return (
    <div className='MO-cards'>
        <h2>Board Attached: {mappedMachineOresData.board.name}</h2>
        <h4 className='white-black-border'>Machine/Ore Pair: {mappedMachineOresData.MO_name}</h4>
        <p>Ore Per minute: {mappedMachineOresData.ore_mined}</p>
        <p>Total ore per hour from pair: {mappedMachineOresData.ore_mined * 60}</p>
    </div>
  )
}

export default BoardPageMachineOres