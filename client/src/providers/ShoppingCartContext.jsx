import React, { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export const ShoppingCartProvider = ( props ) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <ShoppingCartContext.Provider value={{ cartItems, addToCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
};