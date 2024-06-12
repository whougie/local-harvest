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
  const { currentUser } = useAppContext();
  const [ products, setProducts ] = useState();

  useEffect(() => {
    fetch('/api/products')
    .then( (response) => response.json())
    .then( (data) => { setProducts(data)
    })
  }, [])
// function to display products from our seed file and call-in the Card.jsx file for products.  
  function displayProducts() { 
    return (
    <>
      {products && products.map((product, index) => (
        <Card key={index} image={"/images/" + product.picture} title={product.name} price={product.price} />
      ))}
    </>
  );
}
// Tech package Kee was working on...didn't delete incase he needed it to fix. JH
  // useGSAP( () => 
  //   { gsap.to('.productcard', { x: 2, y: 2, opacity: 1, stagger: 0.9 }); },
  //   { scope: containerRef }
  // );
  
    return (

      <>
    { currentUser ? 
    <div className='container'>
      <p className='row justify-content-center text-center display-6'>Welcome to the Market Place!  We hope you enjoy these options from our local partners.</p>
      <div className="cardcontainer row justify-content-center img-thumbnail " ref={containerRef}>
        {displayProducts()}
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