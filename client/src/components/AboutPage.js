import React from 'react'
import NavBar from './NavBar'

function AboutPage({currentUser, setCurrentUser}) {

  return (
    <div>
      <header className="header">
        <h1>
          AboutPage
        </h1>
      </header>
      <div className='Nav-bar-container'>
            <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      </div>
      <iframe width="640" height="360" src="https://www.youtube.com/embed/a6jeRScER4U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div>
        <p className='about-page-p-text'>Satisfactory is a game of factory management and planet exploitation. As a pioneer working for FICSIT Inc., you are dropped onto an alien planet with a handful of tools and must harvest the planet's natural resources to construct increasingly complex factories for automating all your resources needs. After you are set up, it will be time to build the Space Elevator and begin Project Assembly, supplying FICSIT with increasingly numerous and complex components for their unknown purposes.</p>
      </div>
    </div>
  )
}

export default AboutPage