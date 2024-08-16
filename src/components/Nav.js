import React from 'react'
import logo from './Images/My Logo Balck.png'
import './css/Nav.css'
// import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
       <div className='logo-name'>
            <img className='logo-img' src={logo} alt='LOGO' height={100} width={70} />
            <h1>News 360<sup>o</sup> <sub>24/7</sub></h1>
            <div className='news-btns'>
            <a href='/'><div className='news-app-main-btn'> News App</div></a>
            <a href='/Newsappoldversion'><div className='news-app-v2-btn'> News App <h6>New Version</h6></div></a>
            </div>
        </div>
    </div>
  )
}

export default Nav