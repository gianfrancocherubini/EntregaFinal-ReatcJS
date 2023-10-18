import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {
  const [count, setCount] = useState(0); 
  const { cartItems, setCartItems } = useContext(CartContext);

  const increment = () => {
    setCount(count + 1);
    setCartItems(cartItems + 1);
  };

  const decrement = () => {
    if (cartItems > 0) {
      setCount(count - 1);
      setCartItems(cartItems - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <label style={{ margin: 10, fontSize: "1.5rem", fontWeight: "bold" }}>
        {count}
      </label>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default ItemCount;