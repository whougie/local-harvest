import React, { useEffect, useState } from 'react';
import './Bag.css';

const Bag = () => {
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState();

  const [showMessage, setShowMessage] = useState(false);

  function checkoutTotal() {
    if (sessionStorage.getItem('cart')) {
      const storage = sessionStorage.getItem('cart');
      if (storage) {
        setTotal(JSON.parse(storage));
      }
    }
  }

  const handlePrice = () => {
    let ans = 0;
    total && total.forEach((item) => {
      ans += item.quantity * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [total]);

  const handleRemove = (i) => {
    const arr = total.filter((item, index) => index !== i);
    setTotal(arr);
    // Update local storage after removing the item
    sessionStorage.setItem('cart', JSON.stringify(arr));
  };

  const handleOrderPlacement = () => {
    // Logic to place the order here
    setShowMessage(true);
  };

  useEffect(() => {
    checkoutTotal();
  }, []);

  return (
    <article className='checkout'>
      {total && total.map((item, i) => (
        <div className="bag_box" key={i}>
          <div className="cart_img">
            {/* <img src={item.image} alt={item.title} /> */}
            <p>{item.title}</p>
          </div>
          <div>
            <button onClick={() => handleRemove(i)}>Remove</button>
          </div>
          <div>
            <span>${item.price}</span>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Bag</span>
        <span> $ {price}</span>
        <button className='checkoutBtn' type="submit" onClick={handleOrderPlacement}>Place Your Order</button>
        {showMessage && <p>Your order has been placed successfully!</p>}
      </div>
    </article>
  );
};


export default Bag;