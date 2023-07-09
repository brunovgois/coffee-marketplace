import { MapPinLine, Trash, CurrencyDollar } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AddToCartButton } from "../components/AddToCartButton";
import { CoffeeCartContext } from "../contexts/CartContext";

type Inputs = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};
export function ShoppingCart() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [paymentMethod, setPaymentMethod] = useState<
    "credito" | "debito" | "dinheiro" | ""
  >("");

  const { cartItems } = useContext(CoffeeCartContext);

  const handleSendAddress: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex gap-8">
      <div className="">
        <div className="flex flex-col gap-3">
          <h2>Complete seu pedido</h2>
          <div className="bg-[#F3F2F2] rounded-md p-10 max-w-xl">
            <div className="flex gap-3">
              <MapPinLine className="fill-yellow-600 w-6 h-6" />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <form className="flex-grow-0">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="CEP"
                  {...register("cep")}
                  className="w-1/3 rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                />
                <input
                  type="text"
                  placeholder="Rua"
                  {...register("rua")}
                  className="rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                />

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Número"
                    {...register("numero")}
                    className="rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                  />
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register("complemento")}
                    className="w-full rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="Bairro"
                    {...register("bairro")}
                    className="w-1/3 rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    {...register("cidade")}
                    className="w-full rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    {...register("uf")}
                    className="w-1/6 rounded border border-[#E6E5E5] bg-[#EDEDED] p-3 focus:outline-violet-600"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-[#F3F2F2] rounded-md p-10 max-w-xl">
            <div className="flex gap-3 mb-3">
              <CurrencyDollar className="text-purple-400 w-6 h-6" />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                className={`bg-gray-200 gap-3 flex p-4 items-center rounded-md border border-gray-300 ${
                  paymentMethod === "credito"
                    ? "border-purple-600 bg-purple-100"
                    : ""
                }`}
                onClick={()=>setPaymentMethod("credito")}
              >
                Cartão de Crédito
              </button>
              <button
                className={`bg-gray-200 gap-3 flex p-4 items-center rounded-md border border-gray-300 ${
                  paymentMethod === "debito"
                    ? "border-purple-600 bg-purple-100"
                    : ""
                }`}
                onClick={()=>setPaymentMethod("debito")}
              >
                Cartão de Débito
              </button>
              <button
                className={`bg-gray-200 gap-3 flex p-4 items-center rounded-md border border-gray-300 ${
                  paymentMethod === "dinheiro"
                    ? "border-purple-600 bg-purple-100"
                    : ""
                }`}
                onClick={()=>setPaymentMethod("dinheiro")}
              >
                Dinheiro
              </button>
            </div>
          </div>
        </div>
      </div>

      {cartItems.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2>Cafés selecionados</h2>
          <div className="bg-[#F3F2F2] rounded-md p-10 gap-3 flex flex-col">
            {cartItems.map((cartItem) => {
              return (
                <div className="flex gap-5" key={cartItem.id}>
                  <img
                    src={`/src/assets/coffees/${cartItem.photo}`}
                    className="w-16 h-16"
                  />
                  <div>
                    <p>Expresso Tradicional</p>
                    <div>
                      <AddToCartButton coffee={cartItem}>
                        <button className="flex items-center gap-2 bg-gray-200 p-3 rounded-md">
                          <Trash />
                          <span>REMOVER</span>
                        </button>
                      </AddToCartButton>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="flex justify-between">
              <p>Total de itens</p>
              <p>R$ 20</p>
            </div>

            <div className="flex justify-between">
              <p>Entrega</p>
              <p>R$ 5</p>
            </div>

            <div className="flex justify-between font-semibold">
              <p>Total</p>
              <p>R$ 25</p>
            </div>
            <button
              className="rounded-md bg-yellow-400 text-white py-3 px-2 w-full"
              onClick={handleSubmit(handleSendAddress)}
            >
              CONFIRMAR PEDIDO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
