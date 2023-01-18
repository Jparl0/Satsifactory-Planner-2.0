import React, {useEffect} from "react";
import CopyRightFooter from "./CopyRightFooter.js";
import NavBar from "./NavBar.js";
import SatisGif from './SatisGif.mp4'

function HomePage({currentUser, setCurrentUser}) {

  return (
    <div className="main-page">
        <header className="header">
            <h1>Satisfactory Planner</h1>
            
        </header> 
        <div className="sub-title">
          <h2 >Make a Satis-factory Plan Today!</h2>                
        </div>
        <div className='Nav-bar-container'>
          
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </div>
        <div>
          <video
                muted
                autoPlay
                width='800'
                height='480'
                loop
              >
                <source src={SatisGif} type='video/mp4' />
              </video>
          <p className='p-text'>
            With this website, users are able to gather information on various sets of data for the resources of this game. As a resource management game, Satisfactory is all about efficiency, time-management, and managing the finite resources provided to you. From Ores that are extracted by Machines to Machines that create Items, you can micromanage the myriad of data provided to you in this game with this tool. By viewing Machine-Ore pairs that display the necessary data, you can learn how to efficiently manage an Ore's total amount for varying time frames for each pair. With the future incorporation of the Machine-Item model, you will be able to manage the necessary input/output rates for both Machine-Ores -> Machine-Items to help facilitate your factory planning in game.
          </p>
        </div>
        <CopyRightFooter />
    </div>
  )
}

export default HomePage