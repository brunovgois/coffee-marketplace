import { createContext, ReactNode, useEffect, useReducer } from "react";
import { coffeeType } from "../mock/coffe.js";
import {
  addNewItemAction,
  changeItemAmountAction,
  removeItemAction,
  clearCartAction
} from "../reducer/carts/actions.js";

import cartReducer from "../reducer/carts/reducer";

interface CartItem extends coffeeType {
  quantity: number;
}

type CoffeeCartContextType = {
  cartItems: CartItem[];
  handleAddToCart: (cofee: CartItem) => void;
  handleClearCart: () => void;
  handleRemoveFromCart: (index: number) => void;
  handleChangeItemAmountFromCart: (
    cartItemIndex: number,
    amount: number
  ) => void;
  totalCartPrice: number;
};

export const CoffeeCartContext = createContext({} as CoffeeCartContextType);

export function CoffeeCartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, [], (initialState) => {
    const storedStateAsJson = localStorage.getItem(
      "@coffee-marketplace:cart-state"
    );
    if (storedStateAsJson) {
      return JSON.parse(storedStateAsJson);
    }
    return initialState;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(state);

    localStorage.setItem("@coffee-marketplace:cart-state", stateJSON);
  }, [state]);
  const totalCartPrice = parseInt(
    state
      .reduce((prev, cartItem) => {
        return prev + cartItem.price * cartItem.quantity;
      }, 0)
      .toFixed(2)
  );

  function handleAddToCart(newCartItem: CartItem) {
    dispatch(addNewItemAction(newCartItem));
  }

  function handleRemoveFromCart(index: number) {
    dispatch(removeItemAction(index));
  }

  function handleChangeItemAmountFromCart(
    cartItemIndex: number,
    amount: number
  ) {
    dispatch(changeItemAmountAction(cartItemIndex, amount));
  }

  function handleClearCart(){
    dispatch(clearCartAction())
  }

  const value = {
    cartItems: state,
    totalCartPrice,
    handleAddToCart,
    handleRemoveFromCart,
    handleChangeItemAmountFromCart,
    handleClearCart
  };

  return (
    <CoffeeCartContext.Provider value={value}>
      {children}
    </CoffeeCartContext.Provider>
  );
}
