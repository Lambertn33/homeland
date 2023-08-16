import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { HouseInterface } from "../../interfaces/House";

const HousesItem: React.FC<{ house: HouseInterface }> = ({ house }) => {
  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-md p-4 rounded-lg rounded-tl-[90px] w-full flex flex-col">
      <img src={image} alt="" className="mb-8" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full px-3 text-white">{type}</div>
        <div className="bg-violet-500 rounded-full px-3 text-white">
          {country}
        </div>
      </div>
      <div className="text-md font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <div className="flex items-center gap-x-1">
          <div>
            <BiBed className="text-[20px]" />
          </div>
          <div className="font-light">{bedrooms}</div>
        </div>
        <div className="flex items-center gap-x-1">
          <div>
            <BiBath className="text-[20px]" />
          </div>
          <div className="font-light">{bathrooms}</div>
        </div>
        <div className="flex items-center gap-x-1">
          <div>
            <BiArea className="text-[20px]" />
          </div>
          <div className="font-light">{surface}</div>
        </div>
      </div>
      <div className="text-violet-500 font-semibold">
        ${price}
      </div>
    </div>
  );
};

export default HousesItem;
