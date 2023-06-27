import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import CoffeArt from "../assets/CoffeArt.svg";
import { useGetCoffees } from "../hooks/useGetCoffees";

export function Home() {
  const coffees = useGetCoffees();

  return (
    <main>
      <div className="flex bg-homeGradient w-screen -ml-28 gap-14 py-24 px-28">
        <div className="">
          <h1 className="font-extrabold leading-snug text-5xl text-gray-800">
            Encontre o café perfeito para qualquer hora do dia
          </h1>
          <h2 className="pt-4 text-xl leading-snug text-amber-950">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>

          <div className="grid grid-cols-2 grid-rows-2 pt-10 gap-5">
            <div className="flex gap-3">
              <div className="p-2 bg-orange-200 rounded-full">
                <ShoppingCart />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="flex gap-3">
              <div className="p-2 bg-orange-200 rounded-full">
                <Package />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="flex gap-3">
              <div className="p-2 bg-orange-200 rounded-full">
                <Timer />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div className="flex gap-3">
              <div className="p-2 bg-orange-200 rounded-full">
                <Coffee />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </div>
        <img src={CoffeArt} alt="" className="w-[476px] h-[360px]" />
      </div>

      <section>
        <h2 className="pt-4 text-xl leading-snug text-amber-950">
          Nossos cafés
        </h2>
        {coffees.map((coffee) => {
          return (
            <div key={coffee.id}>
              <h1>{coffee.name}</h1>
              <img
                src={`/src/assets/coffees/${coffee.photo}`}
                alt={`Photo image for ${coffee.name}`}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
}
