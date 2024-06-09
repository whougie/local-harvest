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

  function displayProducts() {
    return (<>
    {products.map((product, index) => <Card key={index} image={"/images/" + product.picture} title={product.name} price={product.price} />)}
    </>
    )
  }

  // useGSAP( () => 
  //   { gsap.to('.productcard', { x: 2, y: 2, opacity: 1, stagger: 0.9 }); },
  //   { scope: containerRef }
  // );
  
    return (

      <>
    { currentUser ? 
    <div className='container'>
      <p className='row justify-content-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <div className="cardcontainer row justify-content-center" ref={containerRef}>
        {displayProducts()}
      </div>
    </div>
     : 
         <><a href='/auth'>To Access Marketplace Please Login</a></>
    }
</>

)
    
}
  
export default Market