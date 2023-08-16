import React from "react";
import { HouseInterface } from "../../interfaces/House";
import HousesItem from "./HouseItem";

const HousesList: React.FC<{ houses: HouseInterface[] }> = ({ houses }) => {
  return (
    <section className="mb-20">
      <div className="container">
        <div className="grid xs:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-8">
          {houses.map((house, index) => {
            return <HousesItem house={house} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default HousesList;
