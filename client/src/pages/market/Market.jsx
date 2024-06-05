import React, { useState } from 'react';
import './Market.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Market() {
  // Define Card component here
  const Card = ({ image, title, price }) => {
    // State to track if the button is clicked
    const [isClicked, setIsClicked] = useState(false);

    // Function to handle button click
    const handleClick = () => {
      setIsClicked(true);
      console.log("I got clicked");
    };

    return (
      <div className="col-md-4"> {/* Each card will take 4 columns on medium-sized screens */}
        <div className="card">
          <img src={ image } alt={ title } className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{ title }</h3>
            <p className="card-price">${ price }</p>
            <button className="card-button" onClick={ handleClick }>
              { isClicked ? "Added to Bag" : "Add to Bag" }
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.</p>
      <div className="card-container">
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
  );
}