import { MapPinLine, Trash } from "@phosphor-icons/react";
import React from "react";
import { useForm } from "react-hook-form";
import { AddToCartButton } from "../components/AddToCartButton";

const cartMock = [
  {
    id: 1,
    tags: ["teste"],
    name: "Expresso",
    description: "test",
    photo: "/src/assets/coffees/expresso.png",
    price: 10,
    amount: 2,
  },
  {
    id: 2,
    tags: ["teste"],
    name: "Expresso",
    description: "test",
    photo: "/src/assets/coffees/expresso.png",
    price: 10,
    amount: 2,
  },
];
export function ShoppingCart() {
  const { register, handleSubmit, reset } = useForm();

  function handleSendAddress(data: any) {
    console.log(data);
    reset();
  }

  return (
    <div className="flex gap-8">
      <div className="">
        <h2>Complete seu pedido</h2>
        <div className="bg-gray-100 rounded-md p-10 max-w-xl">
          <div className="flex">
            <MapPinLine className="fill-yellow-600" />
            <div>
              <h3>Endereço de entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <form
            action=""
            onSubmit={handleSubmit(handleSendAddress)}
            className="flex-grow-0"
          >
            <div>
              <input type="text" placeholder="CEP" {...register("cep")} />
              <input type="text" placeholder="Rua" {...register("rua")} />
              <input type="text" placeholder="Número" {...register("numero")} />
              <input
                type="text"
                placeholder="Complemento"
                {...register("complemento")}
              />
              <input type="text" placeholder="Bairro" {...register("bairro")} />
              <input type="text" placeholder="Cidade" {...register("cidade")} />
              <input type="text" placeholder="UF" {...register("uf")} />
            </div>
            <button type="submit">temp</button>
          </form>
        </div>
      </div>

      <div>
        <h2>Cafés selecionados</h2>
        <div className="bg-gray-100 rounded-md p-10 gap-3 flex flex-col">
          {cartMock.map((coffee) => {
            return (
              <div className="flex gap-5" key={coffee.id}>
                <img src={coffee.photo} className="w-16 h-16" />
                <div>
                  <p>Expresso Tradicional</p>
                  <div>
                    <AddToCartButton>
                      <button className="flex items-center gap-2 bg-gray-200 p-2 rounded-md">
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
          <button className="rounded-md bg-yellow-400 text-white py-3 px-2 w-full">
            CONFIRMAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  );
}
