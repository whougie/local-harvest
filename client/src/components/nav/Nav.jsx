import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import Cookie from "js-cookie";
import { useAppContext } from '../../providers/AppProviders';

import bagImage from "../nav/bag2.png";
import logo from "./localHavestLogo.png"

export default function Nav({ bagCount }) {
const { setCurrentUser } = useAppContext();
const [show, setShow] = useState(false);

  function logout(){
    setCurrentUser(null);
    Cookie.remove('auth-cookie')
    window.location.href = "/"  
  console.log(logout + "worked?")
  }

  //functional navigation links to direct to components of the application.
  return (
    <>
      <img src={logo} alt="Local Harvest Logo" className='logo' />
      <nav>
      
        <div className='navigation'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/market'>Market</NavLink>
          <NavLink to='/involvement'>Get Involved</NavLink>
        </div>

        <div className='iconBag' onClick={() => setShow(true)}>
          <NavLink to='/bag' className="bag">
            Bag {bagCount > 0 && <span className="bag-count">{bagCount}</span>}
            {bagCount > 0 && <span className="bag-message">Items Added</span>}
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
          <NavLink to='/auth' onClick={logout}>Logout</NavLink>
        </div>
      </nav>
    </>
  );
}