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
    const arr = total.filter((item, index) => index !== i);
    setTotal(arr);
    // Update local storage after removing the item
  sessionStorage.setItem('cart', JSON.stringify(arr));
  };

  useEffect(() => {
    checkoutTotal()
  }, [])

  return (
    <article className='checkout container'>
      {total && total.map((item, i) => (
        <div className="bag_box row text-center justify-content-center my-3"  key={i}>
          <div className="col-md">
            {/* <img src={item.image} alt={item.title} />  */}
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
        <span> $  {price}</span>
      </div>
    </article>
  );
};

export default Bag;