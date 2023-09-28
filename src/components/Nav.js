import React from 'react'
import logo from './Images/My Logo Balck.png'
// import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
        <div>
            <img className='logo-img' src={logo} alt='LOGO' height={100} width={70} />
        </div>
       <div className='logo-name'>
            <h1>News 360<sup>o</sup> <sub>24/7</sub></h1>
        </div>
        <div>
          
        </div>

    </div>
  )
}

export default Nav