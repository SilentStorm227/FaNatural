import { useContext, createContext, useState } from "react";

const Cartcontext = createContext();

export function CartProvider({children}){
    const [cart, setCart] = useState([]);

    const addtocat = (product) =>{
        setCart((prev) =>{
            const existing = prev.find((item) => item.id === product.id);

            if (existing){
                return prev.map((item) =>
                item.id === product.id ? {...item, qty: item.qty + 1} : item
                );
            }
            return [...prev, { ...product, qty:1 }];
        });
    };

    const increaseQty = (id) => {
        setCart((prev)=>
        prev.map((item>
            item.id === id ? {...item, qty: item.qty + 1} : item
        )
    )
        );
    };

    const decreaseQty = (id) => {
        setCart((prev)=>
        prev.map((item)=>
        item.id === id && item.qty > 1
        ? {...item, qty: item.qty - 1}
        :item
    )
    );
    };

     const removefromCart = (id) => {
        setCart((prev)=> prev.filter((item) => item.id !== id));
     };

       // Make cart + functions available to children
       return(
        <Cartcontext.Provider
        value={{cart, addtocat, increaseQty, decreaseQty, removefromCart}}
        >
            {children}
        </Cartcontext.Provider>
       );
    }

    // Custom hook for easier usage (useCart() instead of useContext)
    export function useCart(){
        return useContext(CartContext)
    }