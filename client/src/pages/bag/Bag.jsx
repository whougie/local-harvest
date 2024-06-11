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
    <article className='checkout container'>
      {total && total.map((item, i) => (

        <div className="bag_box row text-center justify-content-center my-3"  key={i}>
          <div className="col-md">
            <span>Product Name: {item.title}</span>

          </div>
          <div className="col-md">
            <button  onClick={() => handleRemove(i)}>Remove</button>
          </div>
          <div className="col-md">
            <span >Price: ${item.price}</span>
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