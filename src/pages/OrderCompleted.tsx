import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react";
import OrderCompletedArt from "../assets/OrderCompletedArt.svg";
import { useLocation } from "react-router-dom";

export function OrderCompleted() {
  const location = useLocation();

  const { addressCity, addressStreet, addressUF, paymentMethod } =
    location.state;

  return (
    <div className="mt-10 flex flex-col gap-4">
      <h1 className="font-bold text-4xl text-orange-400">Pedido Confirmado!</h1>
      <p className="text-xl">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="flex gap-28">
        <div className="p-10 flex flex-col gap-8 rounded-tr-2xl rounded-bl-2xl rounded-md border border-red-300 w-fit pr-36">
          <div className="flex w-fit gap-4">
            <div className="p-2 bg-orange-200 rounded-full max-h-8 max-w-8">
              <MapPin />
            </div>
            <div>
              <p>
                Entrega em{" "}
                <span className="font-semibold capitalize">{addressStreet}</span>
              </p>
              <p className="capitalize">
                {addressCity}, {addressUF}
              </p>
            </div>
          </div>

          <div className="flex w-fit gap-4">
            <div className="p-2 bg-blue-200 rounded-full max-h-8 max-w-8">
              <Timer />
            </div>
            <div>
              <p>Previsão de entrega</p>
              <p>20 min - 30 min</p>
            </div>
          </div>

          <div className="flex w-fit gap-4">
            <div className="p-2 bg-purple-200 rounded-full max-h-8 max-w-8">
              <CurrencyDollar />
            </div>
            <div>
              <p>Pagamento na entrega</p>
              <p className="font-semibold capitalize">{paymentMethod}</p>
            </div>
          </div>
        </div>

        <img src={OrderCompletedArt} alt="" className="" />
      </div>
    </div>
  );
}
