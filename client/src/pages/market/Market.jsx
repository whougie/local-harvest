import React, { useEffect, useState, useRef } from 'react';
import './Market.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "./Card"
import { useAppContext } from '../../providers/AppProviders';

gsap.registerPlugin(useGSAP);

function Market() {
  const containerRef = useRef();
  const { currentUser, test } = useAppContext();

  useGSAP( () => 
    { gsap.to('.productcard', { x: 2, y: 2, opacity: 1, stagger: 0.9 }); },
    { scope: containerRef }
  );
  
    return (

      <>
    { currentUser ? 
    <div className='container'>
      <p className='row justify-content-center'>Welcome to the Market Place!  We hope you enjoy these options from our local partners.</p>
      <div className="cardcontainer row justify-content-center" ref={containerRef}>
        <Card image="/images/grapes.jpg" title="Grapes" price="10.99 for 5" />
        <Card image="/images/pepper.jpg" title="Pepper" price="8.99" />
        <Card image="/images/corn.jpg" title="Sweet Corn" price="22.99" />
        
        <Card image="/images/orange.jpg" title="Oranges" price="10.99" />
        <Card image="/images/potatoes.jpg" title="Potatoes" price="8.99" />
        <Card image="/images/carrot.jpg" title="Carrot" price="22.99" />
        
        <Card image="/images/blueberries.jpg" title="Blueberries" price="10.99" />
        <Card image="/images/tomatoes.jpg" title="Tomatoes" price="8.99" />
        <Card image="/images/green.jpg" title="Greens" price="22.99" />
      </div>
    </div>
     : 
        <div className='redirectBox'>
         <><a href='/auth' className='redirect'>To Access Marketplace Please Click and Login</a></>
         </div>
    }
</>

)
    
}
  
export default Market