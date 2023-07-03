import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { ReactNode } from "react";

export function AddToCartButton({ children }: { children?: ReactNode }) {
  function handleAddToCart() {
    console.log("click");
  }

  function handleAddAmount() {}

  return (
    <div className="flex gap-2 max-h-6 p-0.5">
      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
        <button onClick={handleAddAmount}>
          <Minus className="text-purple-500" />
        </button>

        <span>1</span>
        <button onClick={handleAddAmount}>
          <Plus className="text-purple-500" />
        </button>
      </div>

      {children ? (
        children
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-purple-700 rounded-md p-2 items-center flex"
        >
          <ShoppingCartSimple className="fill-white w-5 h-5" />
        </button>
      )}
    </div>
  );
}
