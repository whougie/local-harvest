import React from 'react'
import { NavLink } from 'react-router-dom';
import './Nav.css';



export default function Nav() {

  return (
    <>
      <nav className="navigation">
        <NavLink to = '/'>Home</NavLink>
        <NavLink to = '/about'>About</NavLink>
        <NavLink to = '/market'>Market</NavLink>
        <NavLink to = '/auth'>Auth</NavLink>
        <NavLink to = '/involvement'>Get Involved</NavLink>
        <NavLink to = '/bag'>Bag</NavLink>
      </nav>

    </>
  )
}