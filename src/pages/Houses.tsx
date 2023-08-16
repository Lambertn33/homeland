import React, { useContext } from "react";
import { HousesContext } from "../store/houses-context";
import HousesList from "../components/houses/HouseList";

const Houses: React.FC = () => {
  const housesCtx = useContext(HousesContext);
  return (
    <div className="px-8">
      <HousesList houses={housesCtx.houses} />
    </div>
  );
};

export default Houses;
