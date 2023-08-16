import React, { useState } from "react";
import { housesData } from "../data/Houses";
import { HouseInterface } from "../interfaces/House";
import { HouseContextInterface } from "../interfaces/HouseContext";

export const HousesContext = React.createContext<HouseContextInterface>({
  houses: [],
  isLoading: false,
});

const HousesContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [houses, setHouses] = useState<HouseInterface[]>(housesData);
  const [isLoading, setIsLoading] = useState(false);

  const housesContext = {
    houses: houses,
    isLoading: isLoading,
  };
  return (
    <HousesContext.Provider value={housesContext}>
      {children}
    </HousesContext.Provider>
  );
};

export default HousesContextProvider;
