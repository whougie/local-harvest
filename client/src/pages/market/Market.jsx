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
  
  // useEffect(() => {
  //   if (currentUser) {
  //     console.log("This is current User where it's true");
  //     console.log(test);
  //     console.log(currentUser);
  //     displayContent();
  //   } else {
  //     console.log("This is current User where it's false");
  //     console.log(test);
  //     console.log(currentUser);
  //     // return ( <><a href='/auth'>To Access Marketplace Please Login</a></>)
      
  //     // displayProtectedContent();
  //   }
  // },[currentUser])

     console.log("This is current User:");
     console.log(currentUser);


    return (

      <>
    { currentUser ? 
    <div className='container'>
      <p className='row justify-content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
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
         <><a href='/auth'>To Access Marketplace Please Login</a></>
    }
</>

)
    
}
  
export default Market