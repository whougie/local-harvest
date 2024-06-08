import React from 'react';
import './Market.css';
import list from "../../../src/data";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../components/nav/Nav';

export default function Market({ handleClick }) {
  const Card = ({ id, image, title, price }) => {
    return (
      <div className="col-md-4">
        <div className="card">
          <img src={image} alt={title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-price">${price}</p>
            <button className="card-button" onClick={() => handleClick({ id, image, title, price })}>
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