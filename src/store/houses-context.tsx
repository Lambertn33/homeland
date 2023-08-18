import React from "react";
import { housesData } from "../data/Houses";
import { HouseInterface } from "../interfaces/House";
import { HouseContextInterface } from "../interfaces/HouseContext";

export const HousesContext = React.createContext<HouseContextInterface>({
  houses: [],
});

const HousesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const houses: HouseInterface[] = housesData;

  const housesContext = {
    houses: houses,
  };
  return (
    <HousesContext.Provider value={housesContext}>
      {children}
    </HousesContext.Provider>
  );
};

export default HousesContextProvider;
