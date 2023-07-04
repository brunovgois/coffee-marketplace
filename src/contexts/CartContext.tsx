import { createContext, ReactNode, useState } from "react";
import { coffeeType } from "../mock/coffe";


type CoffeeCartContextType = {
  test: string
}

export const CoffeeCartContext = createContext({} as CoffeeCartContextType);

export function CoffeeCartProvider({ children }: { children: ReactNode }) {
  const [test, setTest] = useState("test");
  //TODO use reducer

  return (
    <CoffeeCartContext.Provider value={{ test }}>
      {children}
    </CoffeeCartContext.Provider>
  );
}
