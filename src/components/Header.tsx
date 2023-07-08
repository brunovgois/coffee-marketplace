import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext, useEffect, useState } from "react";
import { CoffeeCartContext } from "../contexts/CartContext";
import axios from "axios";

export function Header() {
  const { cartItems } = useContext(CoffeeCartContext);

  const [neighborhood, setNeighborhood] = useState("Bairro");
  const [uf, setUf] = useState("UF");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        showPosition as unknown as PositionCallback
      );
    }

    async function showPosition(position: {
      coords: { latitude: string; longitude: string };
    }) {
      const res = await axios.get(
        "https://www.mapquestapi.com/geocoding/v1/reverse?key=TPWvRrsfpgGWBACqqXd94fbDcfVpy2WJ&location=" +
          position.coords.latitude +
          "%2C" +
          position.coords.longitude +
          "&outFormat=json&thumbMaps=false"
      );

      if (res.status === 200) {
        setNeighborhood(res.data.results[0].locations[0].adminArea6);
        setUf(res.data.results[0].locations[0].adminArea3);
      }
    }
  }, []);

  return (
    <nav className="flex items-center justify-between py-8">
      <NavLink to="/">
        {" "}
        <img src={Logo} />
      </NavLink>

      <div className="flex items-center gap-3">
        <div className="bg-purple-100 flex py-3 px-2 rounded-md gap-1">
          <MapPin size={24} className="fill-purple-800 " />
          <p className="text-purple-800">
            {neighborhood}, {uf}
          </p>
        </div>

        <div className="bg-yellow-50 py-2 px-2 rounded-md">
          <NavLink to="/cart">
            <ShoppingCart size={24} className="fill-yellow-800" />
          </NavLink>
          {cartItems.length}
        </div>
      </div>
    </nav>
  );
}
