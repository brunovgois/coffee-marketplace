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
    default: {
      throw Error("Unknown action:" + action.type);
    }
  }
}
