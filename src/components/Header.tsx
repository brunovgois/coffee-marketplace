import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useContext } from "react";
import { CoffeeCartContext } from "../contexts/CartContext";

export function Header() {
  const { test } = useContext(CoffeeCartContext);
  return (
    <nav className="flex items-center justify-between py-8">
      <NavLink to="/">
        {" "}
        <img src={Logo} />
      </NavLink>

      <div className="flex items-center gap-3">
        <div className="bg-purple-100 flex py-3 px-2 rounded-md gap-1">
          <MapPin size={24} className="fill-purple-800 " />
          <p className="text-purple-800">Brasília, DF</p>
        </div>

        <div className="bg-yellow-50 py-2 px-2 rounded-md">
          <NavLink to="/cart">
            <ShoppingCart size={24} className="fill-yellow-800" />
          </NavLink>
          test
        </div>
      </div>
    </nav>
  );
}
