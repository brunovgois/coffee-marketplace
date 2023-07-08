import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM"
}

export function addNewItemAction(newCartItem: CartItem){
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      newCartItem
    }
  }
}