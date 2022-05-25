import React, {useState} from 'react'
import Iron_Ore from './Iron_Ore.png'
import Copper_Ore from './Copper_Ore.png'
import Limestone_Ore from './Limestone_Ore.png'

function ScoreBoardCards({boardOresData, mappedBoardOresData}) {

    const [dynamicMinedValue, setDynamicMinedValue] = useState(mappedBoardOresData.ore_amount)
    
    console.log(boardOresData)

    let oreOutputValue = 0;
    
    let minedValue = 0;

    switch(mappedBoardOresData.ore.purity_level) {
            case "pure":
                oreOutputValue = 15 + dynamicMinedValue
            break;
            case "normal":
                oreOutputValue = 10 + dynamicMinedValue
            break;
            case "impure":
                oreOutputValue = 5 + dynamicMinedValue
            break;
            default:
                oreOutputValue = 0
    }

    let oreSrc = "";
    
    switch(mappedBoardOresData.ore.ore_type) {
        case "iron":
            oreSrc = Iron_Ore
        break;
        case "copper":
            oreSrc = Copper_Ore
        break;
        case "limestone":
            oreSrc = Limestone_Ore
        break;
        default:
            oreSrc = Iron_Ore
    }
    
    function fastForwardDay (e) {
        fetch(`/board_ores/${e.target.id}`)
        .then(r => r.json())
        .then(indexedBoardOreData => console.log(indexedBoardOreData))

        // fetch(`/board_ores/${e.target.id}`, {
        //     method: "PATCH",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ore_amount: {minedValue}})})
        // .then(r => r.json())
        // .then(data => {console.log(data)})
    }

  return (

    <div className='machineOres-cards'>
        <h2>Total Ore Amount: {oreOutputValue}</h2> 
        <p>Board Name: {mappedBoardOresData.board.name}</p>
        <p>Ore Name: {mappedBoardOresData.ore.name}</p>
        <img 
            src={`${oreSrc}`}
            alt={mappedBoardOresData.ore.name}
            className='ore-image'
        />
        <p>Purity: {mappedBoardOresData.ore.purity_level}</p>
        <h3>Ore Mined Today: {mappedBoardOresData.machine_ores.ore_mined}</h3>
        <button id={mappedBoardOresData.id} onClick={fastForwardDay}>Fastforward 1 day</button>
    </div>
  )
}

export default ScoreBoardCards

// <p>Voltage: {mappedMachineOresData.voltage}</p>
//    <img 
//             src={`${machineSrc}`}
//             alt={mappedMachineOresData.name}
//             className='machine-image'
//         />

    // function oreAmountDynamicValue () {
            
    //     minedValue = oreOutputValue + mappedBoardOresData.machine_ores.ore_mined
        
    //     // fetch(`/board_ores/${mappedBoardOresData.id}`, {
    //     //     method: "PATCH",
    //     //     headers: { "Content-Type": "application/json" },
    //     //     body: JSON.stringify({ore_amount: {}})})
    //     // .then(r => r.json())
    //     // .then(data => {console.log(data)})

    //     // mappedBoardOresData.ore_mined = oreOutputValue - mappedOreMinedValue
    // }