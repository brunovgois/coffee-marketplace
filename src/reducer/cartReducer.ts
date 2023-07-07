import { coffeeType } from "../mock/coffe";

export interface CartItem extends coffeeType {
  quantity: number 
}

export const initialState = {
  total: 0,
  items: {} as CartItem
}

export default function cartReducer(state: any, action: { type: any; payload?: any; }) {
  const { type, payload } = action

  switch (type) {
    case "addItem": {
      return {
        ...state,
        coffees: payload.coffees
      }
    }
    default: {
      throw Error("Unknown action:" + action.type);
    }
  }
}
