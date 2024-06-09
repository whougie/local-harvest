import React, { useState } from 'react';
import Nav from './Nav';
import Market from './Market';
import Bag from '../bag/Bag';

const App = () => {
  const [show, setShow] = useState(true); // State for controlling whether to show Market or Bag component
  const [bag, setBag] = useState([]); // State for maintaining the items in the bag

  const handleClick = (item) => {
    // Check if the item is already present in the bag
    if (!bag.some((product) => product.id === item.id)) {
      // If item is not present, add it to the bag state
      setBag([...bag, item]);
    }
  };

  // Calculate the bag count based on the length of the bag array
  const bagCount = bag.length;

  return (
    <React.Fragment>
    <Nav setShow={setShow} />
    {/* Conditionally render either the Market or Bag component based on the 'show' state */}
    {show ? <Market /> : <Bag />}
  </React.Fragment>
);
};


export default App;