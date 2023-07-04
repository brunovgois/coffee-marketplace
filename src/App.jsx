import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router";
import { CoffeeCartProvider } from "./contexts/CartContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <CoffeeCartProvider>
        <Router />
      </CoffeeCartProvider>
    </BrowserRouter>
  );
}

export default App;
