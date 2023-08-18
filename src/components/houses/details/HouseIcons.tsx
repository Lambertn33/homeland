import React from "react";
import { HouseInterface } from "../../../interfaces/House";
import { BiArea, BiBath, BiBed } from "react-icons/bi";

const HouseIcons: React.FC<{ house: HouseInterface }> = ({ house }) => {
  return (
    <div className="flex gap-x-6 text-violet-600 mb-8 font-semibold">
      <div className="flex gap-2">
        <BiBed className="text-2xl" />
        <div>{house.bedrooms}</div>
      </div>
      <div className="flex gap-2">
        <BiBath className="text-2xl" />
        <div>{house.bathrooms}</div>
      </div>
      <div className="flex gap-2">
        <BiArea className="text-2xl" />
        <div>{house.surface}</div>
      </div>
    </div>
  );
};

export default HouseIcons;
