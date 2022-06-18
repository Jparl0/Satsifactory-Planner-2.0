import React from 'react'
import Iron_Ore from './Iron_Ore.png'
import Copper_Ore from './Copper_Ore.png'
import Limestone_Ore from './Limestone_Ore.png'

function ScoreBoardCards({mappedBoardOresData}) {

    // const [dynamicMinedValue, setDynamicMinedValue] = useState(mappedBoardOresData.ore_amount)

    let oreSrc = "";
    
    switch(mappedBoardOresData.ore.ore_type) {
        case "Iron":
            oreSrc = Iron_Ore
        break;
        case "Copper":
            oreSrc = Copper_Ore
        break;
        case "Limestone":
            oreSrc = Limestone_Ore
        break;
        default:
            oreSrc = Iron_Ore
    }
    
    function fastForwardDay (e) {
        fetch(`/board_ores/${e.target.id}`)
        .then(r => r.json())
        .then(indexedBoardOreData => {
            //  console.log(indexedBoardOreData)
            fetch(`/board_ores/${e.target.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ore_amount: ((indexedBoardOreData.machine_ores.ore_mined * 24) + indexedBoardOreData.ore_amount)})})
        .then(r => r.json())
        .then(() => {
        })
        document.location.reload(true)
        })       
    }

  return (

        <div className='machineOres-cards'>
            <h2>Total Ore Amount: {mappedBoardOresData.ore_amount}</h2> 
            <p>Board Attached: {mappedBoardOresData.board.name}</p>
            <p>Ore Name: {mappedBoardOresData.ore.name}</p>
            <img 
                src={`${oreSrc}`}
                alt={mappedBoardOresData.ore.name}
                className='ore-image'
            />
            <p>Purity: {mappedBoardOresData.ore.purity_level}</p>
            <h3 className='white-black-border'>Ore Mined Per hour: {mappedBoardOresData.machine_ores.ore_mined}</h3>
            <button id={mappedBoardOresData.id} onClick={fastForwardDay}>Fastforward 1 day</button>
        </div>
  )
}

export default ScoreBoardCards
