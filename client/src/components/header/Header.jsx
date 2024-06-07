import React from 'react'
import './Header.css';
import Nav from '../nav/Nav';
import { gsap } from "gsap";

export default function Header(){

return(

  <header className='header'>
   
    <Nav/>
    <h1 className='projectName'>Local Farm</h1>

  </header>

 

)
}