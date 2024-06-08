import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import bagImage from "../nav/bag2.png";

export default function Nav({ bagCount, setShow }) {
  return (
    <>
      <nav>
        <div className='navigation'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/market'>Market</NavLink>
          <NavLink to='/involvement'>Get Involved</NavLink>
        </div>

        <div className='iconBag' onClick={() => setShow(true)}>
          <NavLink to='/bag' className="bag">
            Bag <span className="bag-count">{bagCount}</span>
          </NavLink>
          <NavLink to='/bag' className='bagicon' onClick={() => setShow(false)}>
            <img src={bagImage} alt="Bag" className='bagicon' />
          </NavLink>
        </div>

        <ul>
          {/* Optional content */}
        </ul>

        <div className='auth'>
          <NavLink to='/auth'>Membership</NavLink>
          <NavLink to='/auth'>Login</NavLink>
          <NavLink to='/auth'>Logout</NavLink>
        </div>
      </nav>
    </>
  );
}