import { createContext, ReactNode, useReducer } from "react";
import { coffeeType } from "../mock/coffe.js";
import { addNewItemAction } from "../reducer/carts/actions.js";

import cartReducer from "../reducer/carts/reducer";

interface CartItem extends coffeeType {
  quantity: number;
}

type CoffeeCartContextType = {
  cartItems: CartItem[];
  handleAddToCart: (cofee: CartItem) => void;
};

export const CoffeeCartContext = createContext({} as CoffeeCartContextType);

export function CoffeeCartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, []);

  function handleAddToCart(newCartItem: CartItem) {
    dispatch(addNewItemAction(newCartItem));
  }

  const value = {
    cartItems: state,
    handleAddToCart,
  };

  return (
    <CoffeeCartContext.Provider value={value}>
      {children}
    </CoffeeCartContext.Provider>
  );
}
