import { createContext, ReactNode, useReducer, } from "react";
import { coffeeType } from "../mock/coffe.js";

import cartReducer, { initialState } from "../reducer/cartReducer";

interface CartItem extends coffeeType {
  quantity: number;
}

type CoffeeCartContextType = {
  cartItems: CartItem[];
  handleAddToCart: (coffee: CartItem) => void;
  cartQuantity: number;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItemId: number) => void;
  cartItemsTotalPrice: number;
  cleanCart: () => void;
};

export const CoffeeCartContext = createContext(initialState);

export function CoffeeCartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log("state");
  console.log(state);

  function handleAddToCart(coffee: any, quantity: any) {
    dispatch({
      type: "addItem",
      payload: { 
        
      },
    });
  }

  const value = {
    total: state.total,
    items: state.items,
    handleAddToCart,
  };
  return (
    <CoffeeCartContext.Provider value={value}>
      {children}
    </CoffeeCartContext.Provider>
  );
}
