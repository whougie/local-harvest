import React, { useEffect, useState } from 'react';
// import { useShoppingCart } from "../../providers/ShoppingCartContext"
import './Bag.css';


const Bag = () => {
  const [price, setPrice] = useState(0);

const [total, setTotal] =useState()

function checkoutTotal (){
  if(sessionStorage.getItem('cart')){
    const storage =sessionStorage.getItem('cart')
    if(storage){
      setTotal(JSON.parse(storage))
      console.log(storage)
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
    const arr = total.filter((item) => item.i !== i);
    setTotal(arr);
  };

  useEffect(() => {
    checkoutTotal()
  }, [])

  return (
    <article>
      {total && total.map((item, i) => (
        <div className="bag_box" key={i}>
          <div className="cart_img">
            {/* <img src={item.img} alt={item.title} /> */}
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
        <span> $  {price}</span>
      </div>
    </article>
  );
};

export default Bag;