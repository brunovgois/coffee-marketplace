import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { CoffeeCartProvider } from "./contexts/CartContext.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <CoffeeCartProvider>
        <Router />
        <ToastContainer />
      </CoffeeCartProvider>
    </BrowserRouter>
  );
}

export default App;
