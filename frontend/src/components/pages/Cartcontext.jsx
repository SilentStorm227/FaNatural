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
        return prev.map((item) =>
          item.id === product._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, id: product._id, qty: 1 }];
    });
  };

  // Function: get current qty of a product
  const getQty = (id) => {
    const item = cart.find((p) => p.id === id);
    return item ? item.qty : 0;
  };

  // Function: increase qty of a product (up to max)
  const increaseQty = (id, max) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty < max ? item.qty + 1 : item.qty }
          : item
      )
    );
  };

  // Function: decrease qty of a product
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty > 0 ? item.qty - 1 : 0 }
          : item
      )
    );
  };

  // Function: remove product completely
  const removefromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Cartcontext.Provider
      value={{ cart, addtocart, getQty, increaseQty, decreaseQty, removefromCart }}
    >
      {children}
    </Cartcontext.Provider>
  );
}

// Custom hook for easier usage
export function useCart() {
  return useContext(Cartcontext);
}