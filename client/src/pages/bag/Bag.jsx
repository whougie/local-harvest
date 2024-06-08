import React, { useState, useEffect } from 'react';
import './Bag.css';
import Market from '../market/Market';

// Bag component responsible for rendering the bag items and managing bag operations
const Bag = ({ bag, handleChange, setBag, updateBagCount }) => {
  // State for total price of items in the bag
  const [price, setPrice] = useState(0);

  // Function to calculate total price of items in the bag
  const handlePrice = () => {
    let ans = 0;
    bag.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  // Function to remove item from the bag
  const handleRemove = (id) => {
    const arr = bag.filter((item) => item.id !== id);
    setBag(arr);
  };

  // Effect to recalculate total price when bag changes
  useEffect(() => {
    handlePrice();
  }, [bag]); // Run this effect only when bag changes

  return (
    <article>
      {/* Map over bag items and render them */}
      {bag.map((item) => (
        <div className="bag_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} /> {/* Render item image */}
            <p>{item.title}</p> {/* Render item title */}
          </div>
          <div>

            {/* Buttons to increase/decrease item quantity */}
            <button onClick={() => { handleChange(item, +1); updateBagCount() }}> + </button> {/* Button to increase item quantity */}
            <button>{item.amount}</button> {/* Button to display item quantity */}
            <button onClick={() => handleChange(item, -1)}> - </button> {/* Button to decrease item quantity */}

          </div>

          <div>
            <span>{item.price}</span> {/* Render item price */}
            <button onClick={() => handleRemove(item.id)}>Remove</button> {/* Button to remove item */}
          </div>
        </div>
      ))}
      {/* Render total price of items in the bag */}
      <div className='total'>
        <span>Total Price of your Bag</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Bag; 