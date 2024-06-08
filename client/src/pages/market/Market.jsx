import React from 'react';
import './Market.css';
import list from "../../../src/data"
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Market() {
  // Define Card component here
  const Card = ({ image, title, price }) => {
    // State to track if the button is clicked
    const [isClicked, setIsClicked] = React.useState(false);

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
        {/* Render card items from the list array */}
        {list.map((item) => (
          <Card key={item.id} image={item.image} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}