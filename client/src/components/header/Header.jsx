import React from 'react'
import './Header.css';
import Nav from '../nav/Nav';
// import logo from "./localHavestLogo.png"
import { gsap } from "gsap";

export default function Header(){

return(

  <header className='header'>
       {/* <img src={logo} alt="Local Harvest Logo" className='logo' /> */}
    <Nav/>
    
    <h1 className='projectName'>Local Farm</h1>

  </header>

 

)
}