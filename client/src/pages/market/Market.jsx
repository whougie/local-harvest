import React, { useState } from 'react';
import './Market.css';
import list from "../../../src/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/nav/Nav';

export default function Market({ handleClick }) {
  const Card = ({ id, description, image, title, price }) => {
    const [quantity, setQuantity] = useState(1);

      // event
    const handleQuantityChange = (e) => {
      const value = parseInt(e.target.value);
      setQuantity(value);
    };

    return (
      <div className="col-md-4">
        <div className="card">
          <img src={image} alt={title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-price">${price}</p>
            <p className="card-price">{description}</p>
           
            <div className="quantity-section">
              <label htmlFor={`quantity-${id}`} >Quantity:</label>
              <input
                type="number"
                id={`quantity-${id}`}
                value={quantity}
                onChange={handleQuantityChange}
                min={1}
              />
            </div>
            <button
              className="card-button"
              onClick={() => handleClick({ id, description, image, title, price, quantity })}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="card-container">
        {list.map((item) => (
          <Card key={item.id} id={item.id} image={item.img} title={item.title} price={item.price} />
        ))}
      </div>
    </div>
  );
}