import { MapPinLine } from "@phosphor-icons/react";
import React from "react";
import { useForm } from "react-hook-form";

export function ShoppingCart() {
  const { register, handleSubmit, reset } = useForm();

  function handleSendAddress(data: any) {
    console.log(data);
    reset();
  }

  return (
    <div>
      <div>
        <h2>Complete seu pedido</h2>
        <div>
          <div className="bg-gray-100 rounded-md p-10 ">
            <div className="flex">
              <MapPinLine className="fill-yellow-600" />
              <div>
                <h3>Endereço de entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <form action="" onSubmit={handleSubmit(handleSendAddress)}>
              <div>
                <input type="text" placeholder="CEP" {...register("cep")} />
                <input type="text" placeholder="Rua" {...register("rua")} />
                <input
                  type="text"
                  placeholder="Número"
                  {...register("numero")}
                />
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register("complemento")}
                />
                <input
                  type="text"
                  placeholder="Bairro"
                  {...register("bairro")}
                />
                <input
                  type="text"
                  placeholder="Cidade"
                  {...register("cidade")}
                />
                <input type="text" placeholder="UF" {...register("uf")} />
              </div>
              <button type="submit">temp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
