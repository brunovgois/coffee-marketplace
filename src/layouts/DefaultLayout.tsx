import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="max-w-6xl h-screen mx-20 p-10">
      <Header />
      <Outlet />
    </div>
  )
}