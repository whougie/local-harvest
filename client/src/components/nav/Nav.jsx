import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Cookie from "js-cookie";
import { useAppContext } from '../../providers/AppProviders';

import bagImage from "../nav/bag2.png";


export default function Nav({ size, setShow }) {
const { setCurrentUser } = useAppContext();

  function logout(){
    setCurrentUser(null);
    Cookie.remove('auth-cookie')
    window.location.href = "/"  
  console.log(logout + "worked?")
  }
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
          {/* NavLink to the Bag component */}
          <NavLink to='/bag' className="bag">Bag</NavLink>
          {/* Image link to navigate to the Bag component */}
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
          <NavLink to='/auth' onClick={logout}>Logout</NavLink>
        </div>
      </nav>
    </>
  );
}