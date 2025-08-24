import { useContext, createContext, useState } from "react";

// Create the Cart context (like a global storage for cart state)
const Cartcontext = createContext();

// The provider wraps around your app so all components can use the cart
export function CartProvider({children}){
      // State: keeps track of all items in the cart
    const [cart, setCart] = useState([]);

      // Function: add a product to the cart
    const addtocart = (product) =>{
        setCart((prev) =>{
                  // Check if product is already in cart
            const existing = prev.find((item) => item.id === product._id);
            if (existing){
                        // If yes, increase its quantity
            alert(`${product.name} increased`);
                return prev.map((item) =>
                item.id === product._id ? {...item, qty: item.qty + 1} : item
                );
            }
            alert(`${product.name} added to cart`);
                  // If not, add new product with qty = 1
            return [...prev, { ...product, id: product._id, qty:1 }];
        });
    };

      // Function: increase product quantity
    const increaseQty = (id, max) => {
    setCart((prev) =>{
      const current = prev[id] || 0;
      if (current < max){
        return{ ...prev, [id]: current + 1}
      }
      return prev; // do nothing if already at max
    }
    );
              alert("+1");
};


  // Function: decrease number in input
    const decreaseQty = (id) => {
        setQuanties((prev) => {
          const current = prev[id] || 0;
          if (current > 0){
            return{ ...prev, [id]: current - 1};
          }
          return prev; // do nothing if already at 0
        });
              alert("-1");
    };

      // Function: handle typing manually in input
      const inputchange = (id, value, max) => {
        const num = parseInt(value) || 0;
            if (num >= 0 && num <= max) {
          setQuanties((prev) => ({ ...prev, [id]: num}));
        };
      }

        // Function: add to cart with selected qty
        const handleaddtocart = (p) => {
          const qty = quantites[p._id] || 0;
          if(qty > 0){
            addtocart({ ...p, qty});// send product + qty to cart
            alert(`${qty} ${p.name}(s) added to cart`);
          }else{
            alert("please select at least one item before adding to cart");
          }
        };

      // Function: remove product completely
     const removefromCart = (id) => {
        setCart((prev)=> prev.filter((item) => item.id !== id));
     };

       // Make cart + functions available to children
       return(
        <Cartcontext.Provider
        value={{cart, inputchange, handleaddtocart, addtocart, increaseQty, decreaseQty, removefromCart}}
        >
            {children}
        </Cartcontext.Provider>
       );
    }

    // Custom hook for easier usage (useCart() instead of useContext)
    export function useCart(){
        return useContext(Cartcontext)
    }