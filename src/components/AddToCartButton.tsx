import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

export function AddToCartButton() {
  function handleAddToCart() {
    console.log("click");
  }

  function handleAddAmount() {}

  return (
    <div className="flex gap-2">
      <div className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
        <button onClick={handleAddAmount}>
          <Minus className="text-purple-500"/>
        </button>

        <span>1</span>
        <button onClick={handleAddAmount}>
          <Plus className="text-purple-500"/>
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        className="bg-purple-700 rounded-md p-2"
      >
        <ShoppingCartSimple className="fill-white w-5 h-5" />
      </button>
    </div>
  );
}
