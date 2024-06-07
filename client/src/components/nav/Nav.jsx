import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Cookie from "js-cookie"


export default function Nav() {

  function logout(){
    Cookie.remove('auth-cookie')
  // window.location.href = "/"  
  console.log(logout + "worked?")
  }
  return (
    <>
      <nav >
        {/* <img src="/images/localHarvestLogo.png" alt="Local Harvest Logo" className='lhlogo' /> */}
        <div className='navigation'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/market'>Market</NavLink>
          <NavLink to='/involvement'>Get Involved</NavLink>
          <NavLink to='/bag'>Bag</NavLink>
        </div>
        <ul>
          <br />
        </ul>
        <div className='auth'>
          <NavLink to='/auth'>Become A Member</NavLink>
          <NavLink to='/auth'>Login</NavLink>
          <NavLink to='/auth' onClick={logout}>Logout</NavLink>
        </div>
      </nav>

    </>
  )
}