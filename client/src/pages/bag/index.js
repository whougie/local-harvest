import React, { useState } from 'react';
import Nav from './Nav';
import Market from './Market';
import Bag from './Bag';
import bagImage from '../nav/bag2.png';


const App = () => {
  const [show, setShow] = useState(true);
  const [bag, setBag] = useState([]);
  const [bagCount, setBagCount] = useState(0);

  const handleClick = (item) => {
    let isPresent = false;
    bag.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      return;
    }
    setBag([...bag, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    bag.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = [...bag];
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setBag(tempArr);
  };

  const updateBagCount = () => {
    setBagCount(bag.length);
  };

  return (
    <React.Fragment>
      <Nav size={bagCount} setShow={setShow} />
      {show ? <Market handleClick={handleClick} /> : <Bag bag={bag} handleChange={handleChange} setBag={setBag} updateBagCount={updateBagCount} />}
    </React.Fragment>
  );
};

export default App;