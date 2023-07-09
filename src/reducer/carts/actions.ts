import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = "ADD_NEW_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CHANGE_ITEM_AMOUNT = "CHANGE_ITEM_AMOUNT"
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

export function changeItemAmount(cartItemIndex: number, amount: number){
  return {
    type: ActionTypes.CHANGE_ITEM_AMOUNT,
    payload: {
      cartItemIndex,
      amount
    }
  }
}