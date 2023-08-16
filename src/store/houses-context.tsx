import React, { useState, useEffect } from "react";
import { housesData } from "../data/Houses";
import { HouseInterface } from "../interfaces/House";

export const HousesContext = React.createContext({
  houses: [] as HouseInterface[],
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
