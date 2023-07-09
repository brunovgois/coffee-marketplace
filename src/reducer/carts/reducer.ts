import { coffeeType } from "../../mock/coffe";
import { ActionTypes } from "./actions";
import { produce } from 'immer'

export interface CartItem extends coffeeType {
  quantity: number
}

export default function cartReducer(state: Array<CartItem>, action: any) {
  const { type, payload } = action

  switch (type) {
    case ActionTypes.ADD_NEW_ITEM: {
      return produce(state, draft => {
        draft.push(payload.newCartItem)
      })
    }
    case ActionTypes.REMOVE_ITEM: {
      const cartItemIndx = state.findIndex((cartItem) => {
        return cartItem.id === payload.cartItemIndex
      })
      return produce(state, draft => {
        draft.splice(cartItemIndx, 1)
      })
    }
    case ActionTypes.CHANGE_ITEM_AMOUNT: {
      const { cartItemIndex, amount } = payload;

      return produce(state, (draft) => {
        const cartItem = draft.find((item) => item.id === cartItemIndex);
        if (cartItem) {
          cartItem.quantity = amount;
        }
      })
    }
    default: {
      throw Error("Unknown action:" + action.type);
    }
  }
}
