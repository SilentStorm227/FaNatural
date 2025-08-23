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
                return prev.map((item) =>
                item.id === product._id ? {...item, qty: item.qty + 1} : item
                );
            }
                  // If not, add new product with qty = 1
            return [...prev, { ...product, id: product._id, qty:1 }];
        });
    };

      // Function: increase product quantity
    const increaseQty = (id) => {
    setCart((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
    );
};


      // Function: decrease product quantity
    const decreaseQty = (id) => {
        setCart((prev)=>
        prev.map((item)=>
                    // Only decrease if qty is more than 1
        item.id === id && item.qty > 1
        ? {...item, qty: item.qty - 1}
        :item
    )
    );
    };

      // Function: remove product completely
     const removefromCart = (id) => {
        setCart((prev)=> prev.filter((item) => item.id !== id));
     };

       // Make cart + functions available to children
       return(
        <Cartcontext.Provider
        value={{cart, addtocart, increaseQty, decreaseQty, removefromCart}}
        >
            {children}
        </Cartcontext.Provider>
       );
    }

    // Custom hook for easier usage (useCart() instead of useContext)
    export function useCart(){
        return useContext(Cartcontext)
    }