// Import React and the necessary hooks and components
import React, { useState } from 'react';
import Nav from './Nav';
import Market from './Market';
import Bag from './Bag';
import bagImage from '../nav/bag2.png';

// Define the main App component
const App = () => {
  // Define state variables using the useState hook
  const [show, setShow] = useState(true); // State for controlling whether to show Market or Bag component
  const [bag, setBag] = useState([]); // State for maintaining the items in the bag
  const [bagCount, setBagCount] = useState(0); // State for tracking the number of items in the bag

  // Function to handle adding an item to the bag
  const handleClick = (item) => {
    // Check if the item is already present in the bag
    let isPresent = false;
    bag.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    // If item is present, return without adding it again
    if (isPresent) {
      return;
    }
    // Otherwise, add the item to the bag state
    setBag([...bag, item]);
  };

  // Function to handle changing the quantity of an item in the bag
  const handleChange = (item, d) => {
    // Find the index of the item in the bag array
    let ind = -1;
    bag.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    // Create a copy of the bag array
    const tempArr = [...bag];
    // Update the quantity of the item
    tempArr[ind].amount += d;
    // Ensure the quantity is at least 1
    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    // Update the bag state with the modified array
    setBag(tempArr);
  };

  // Function to update the bag count
  const updateBagCount = () => {
    // Update the bag count state with the length of the bag array
    setBagCount(bag.length);
  };

  // Render the components
  return (
    <React.Fragment>
      {/* Render the Nav component with props */}
      <Nav size={bagCount} setShow={setShow} />
      {/* Conditionally render either the Market or Bag component based on the 'show' state */}
      {show ? <Market handleClick={handleClick} /> : <Bag bag={bag} handleChange={handleChange} setBag={setBag} updateBagCount={updateBagCount} />}
    </React.Fragment>
  );
};


export default App;