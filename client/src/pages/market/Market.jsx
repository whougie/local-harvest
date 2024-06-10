import React, { useEffect, useState, useRef } from 'react';
import { useBeforeUnload, useLocation } from "react-router-dom";
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
  const [ bags, setBags ] = useState();
  const [ userBag, setUserBag ] = useState();
  const [ productPurchase, setProductPurchase ] = useState();

  // get products from DB
  useEffect(() => {
    fetch('/api/products')
    .then( (response) => response.json())
    .then( (data) => { setProducts(data)
    })
  }, []);

  // get bags from DB
  useEffect(() => {
    fetch('/api/bags')
    .then(response => response.json())
    .then( data => {
      setBags(data);

     // const userBag = bags.filter( (bag) => bag.user._id === currentUser._id);

     console.log("Bags are first: ")
     console.log(data)

      if (bags) {
        console.log("No bags");
      } else {
        console.log("Got bags")
      }
  }) 
  }, []);


  useEffect( () => {

    console.log("Checking for bags for just user")
    console.log(currentUser)
    console.log(currentUser && currentUser._id)
    if (bags) {
      const userBags = bags.filter( (bag) => bag.user._id === currentUser._id)
    } else {
      console.log("No bags and not sure how you got here")
    }

  }, [bags])
  


  let location = useLocation();

  useEffect(() => {
    console.log("Changing page")
  }, [location]);

  // user is leaving page
  // useBeforeUnload(
  //   useCallback(() => {
  //     console.log("Doing stuff before redirect")
  //     alert("Calling before redirect")
  //   },[])
  // );

  // Load the bag 
    // Look for a list of bags with the userId and look for one the that isBagCheckoutedOut = false
      // If no bags then create a new bag
      // If it exists load the in progress bag
    // Load the ProductPurchase for the bad
      // If no ProductPurchase list 
        // Crete a new one and use it and assign it to the bag
        // If it exists, use it
  
  // Use the ProductPurchase to determine which products will be purchased
    // If the product has been added to the purchase list then display the add and remove button
      // Only allow more products to be added if the qty is more than the current products being purchased
      // Only allow to remove product if qtyPurchase is > 0

  // Update the ProductPurchase with the user changes
    // 2 states for adding product to bag
      // Add item if the Add button is pressed and display the buttons to add and remove (also display qtyPurchased), need to update shared productPurchase, which will be inside the bag
      // Add items when plus sign is pressed and remove items when subtracted


  function displayProducts() {
    return (
    <>
      {products && products.map((product, index) => (
        <Card key={index} image={"/images/" + product.picture} title={product.name} price={product.price} />
      ))}
    </>
  );
}

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