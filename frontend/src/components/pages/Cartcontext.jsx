import { useContext, createContext, useState } from "react";

// Create the Cart context
const Cartcontext = createContext();

// The provider wraps around your app so all components can use the cart
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Function: add product to cart (or increase if exists)
  const addtocart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product._id);
      if (existing) {
        const newQty = Math.min(existing.qty + product.qty, product.amount) 
        return prev.map((item) =>
          item.id === product._id ? { ...item, qty: newQty } : item
        );
      }
      return [...prev, { ...product, id: product._id, qty: product.qty }];
    });
  };

  // // Function: get current qty of a product
  // const getQty = (id) => {
  //   const item = cart.find((p) => p.id === id);
  //   return item ? item.qty : 0;
  // };

    // Increase quantity for a product (but not more than stock)
   const increaseQty = (id, max) => {
   setQuantities((prev) => ({
    ...prev,
    [id]: Math.min(prev[id] + 1, max),
   }));
  };

    // Decrease quantity for a product (minimum 1)
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
        ...prev,
        [id]: Math.max(prev[id] - 1, 1),
    })
    );
  };

   
  // // Function: remove product completely
  // const removefromCart = (id) => {
  //   setCart((prev) => prev.filter((item) => item.id !== id));
  // };

  return (
    <Cartcontext.Provider
      value={{ cart, addtocart, increaseQty, decreaseQty }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

// Custom hook for easier usage
export function useCart() {
  return useContext(Cartcontext);
}