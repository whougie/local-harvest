import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css';



export default function Nav() {

  return (
    <>
      <nav >
        <div className='navigation'>
        <NavLink to = '/'>Home</NavLink>
        <NavLink to = '/about'>About</NavLink>
        <NavLink to = '/market'>Market</NavLink>
        <NavLink to = '/involvement'>Get Involved</NavLink>
        <NavLink to = '/bag'>Bag</NavLink>
        </div>
        <ul>
          <br />
        </ul>
        <div className='auth'>
        <NavLink to = '/auth'>Sign Up</NavLink>
        <NavLink to = '/auth'>Login</NavLink>
        </div>
      </nav>

    </>
  )
}