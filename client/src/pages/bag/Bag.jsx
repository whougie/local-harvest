import React, { useEffect, useState } from 'react';
import './Bag.css';

const Bag = ({ bag, setBag }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    bag.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [bag]);

  const handleRemove = (id) => {
    const arr = bag.filter((item) => item.id !== id);
    setBag(arr);
  };

  return (
    <article>
      {bag.map((item) => (
        <div className="bag_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
          <div>
            <span>{item.price}</span>
            <span>{item.amount}</span>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Bag</span>
        <span>Rs - {price}</span>
      </div>
    </article>
  );
};

export default Bag;