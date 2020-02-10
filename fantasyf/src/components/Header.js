import React from 'react'
import NFL from '../NFL.jpg'

function Header(props) {
    return (
        <header>
            <h1>Fantasy Football Draft</h1>
            <img className='logo' src={NFL} alt="NFL logo" />
        </header>
    )
  }

export default Header