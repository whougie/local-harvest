import React, { useEffect, useState, useRef } from 'react';
import './Market.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Card from "./Card"

gsap.registerPlugin(useGSAP);

function Market() {
  const containerRef = useRef();

  useGSAP( () => 
    { gsap.to('.productcard', { x: 2, y: 2, opacity: 1, stagger: 0.9 }); },
    { scope: containerRef }
  );
  
  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <div className="cardcontainer" ref={containerRef}>
        <Card image="../../public/images/grapes.jpg" title="Grapes" price="10.99 for 5" />
        <Card image="../../public/images/pepper.jpg" title="Perpper" price="8.99" />
        <Card image="../../public/images/corn.jpg" title="Sweet Corn" price="22.99" />
        
        <Card image="../../public/images/orange.jpg" title="Oranges" price="10.99" />
        <Card image="../../public/images/potatoes.jpg" title="Potatoes" price="8.99" />
        <Card image="../../public/images/carrot.jpg" title="Carrot" price="22.99" />
        
        <Card image="../../public/images/blueberries.jpg" title="Blueberries" price="10.99" />
        <Card image="../../public/images/tomatoes.jpg" title="Tomatoes" price="8.99" />
        <Card image="../../public/images/green.jpg" title="Greens" price="22.99" />
      </div>
    </div>
  )}

  export default Market