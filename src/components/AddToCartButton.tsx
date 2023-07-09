import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { ReactNode, useContext, useState } from "react";
import { CoffeeCartContext } from "../contexts/CartContext";
import { coffeeType } from "../mock/coffe";

type AddToCartButtonProps = {
  children?: ReactNode;
  coffee: coffeeType;
};
export function AddToCartButton({ children, coffee }: AddToCartButtonProps) {
  const [amount, setAmount] = useState(1);

  const { handleAddToCart } = useContext(CoffeeCartContext);

  function handleChangeAmountbyOne(action: "add" | "subtract") {
    if (action === "add") {
      setAmount((state) => state + 1);
    } else {
      if (amount > 1) {
        setAmount((state) => state - 1);
      }
    }
  }

  return (
    <div className="flex gap-2 max-h-6 p-0.5">
      <div className="flex items-center gap-2 bg-gray-200 p-3 rounded-md">
        <button onClick={() => handleChangeAmountbyOne("subtract")}>
          <Minus className="text-purple-500" />
        </button>

        <span>{amount}</span>
        <button onClick={() => handleChangeAmountbyOne("add")}>
          <Plus className="text-purple-500" />
        </button>
      </div>

      {children ? (
        children
      ) : (
        <button
          onClick={() => handleAddToCart({ ...coffee, quantity: amount })}
          className="bg-purple-700 rounded-md p-3 items-center flex"
        >
          <ShoppingCartSimple className="fill-white w-5 h-5" />
        </button>
      )}
    </div>
  );
}
