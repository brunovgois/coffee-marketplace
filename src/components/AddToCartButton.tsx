import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { ReactNode, useContext, useEffect, useState } from "react";
import { CoffeeCartContext } from "../contexts/CartContext";
import { toast } from "react-toastify";
import { CartItem } from "../reducer/carts/reducer";

type AddToCartButtonProps = {
  children?: ReactNode;
  coffee: CartItem;
};
export function AddToCartButton({ children, coffee }: AddToCartButtonProps) {
  const [amount, setAmount] = useState(children ? coffee.quantity : 1);

  useEffect(() => {
    if (children) {
      handleChangeItemAmountFromCart(coffee.id, amount);
    }
  }, [amount]);
  const { cartItems, handleAddToCart, handleChangeItemAmountFromCart } =
    useContext(CoffeeCartContext);

  function handleChangeAmountbyOne(action: "add" | "subtract") {
    if (action === "add") {
      setAmount((state) => state + 1);
    } else {
      if (amount > 1) {
        setAmount((state) => state - 1);
      }
    }
  }

  function handleAddCoffeToCart() {
    if (cartItems.length < 9) {
      handleAddToCart({ ...coffee, quantity: amount });
      toast(
        `${amount} café${amount !== 1 ? "s" : ""} adicionado${
          amount !== 1 ? "s" : ""
        } ao carrinho`
      );
    } else {
      toast(
        "Quantidade máxima atingida. Finalize a compra ou esvazie alguns items do carrinho antes de adicionar mais. "
      );
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
          onClick={handleAddCoffeToCart}
          className="bg-purple-700 rounded-md p-3 items-center flex"
        >
          <ShoppingCartSimple className="fill-white w-5 h-5" />
        </button>
      )}
    </div>
  );
}
