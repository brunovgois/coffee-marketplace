import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export function addNewItemAction(newCartItem: CartItem){
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newCartItem
    }
  }
}

export function removeItemAction(cartItemIndex: number) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      cartItemIndex
    }
  }
}