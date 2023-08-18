import React from "react";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import {
  HouseInterface,
  HouseDetailsIconsPropsInterface,
} from "../../interfaces/House";

const HousesItem: React.FC<{ house: HouseInterface }> = ({ house }) => {
  const HouseItemIcon: React.FC<HouseDetailsIconsPropsInterface> = ({
    icon,
    count,
  }) => {
    return (
      <div className="flex items-center gap-x-1">
        <div>{icon}</div>
        <div className="font-light">{count}</div>
      </div>
    );
  };

  const { image, type, country, address, bedrooms, bathrooms, surface, price } =
    house;
  return (
    <div className="bg-white shadow-md p-4 rounded-lg rounded-tl-[90px] w-full flex flex-col cursor-pointer hover:shadow-xl">
      <img src={image} alt="" className="mb-8" />
      <div className="mb-4 flex gap-x-2 text-sm">
        <div className="bg-green-500 rounded-full px-3 text-white">{type}</div>
        <div className="bg-violet-500 rounded-full px-3 text-white">
          {country}
        </div>
      </div>
      <div className="text-md font-semibold max-w-[260px]">{address}</div>
      <div className="flex gap-x-4 my-4">
        <HouseItemIcon
          count={bedrooms}
          icon={<BiBed className="text-[20px]" />}
        />
        <HouseItemIcon
          count={bathrooms}
          icon={<BiBath className="text-[20px]" />}
        />
        <HouseItemIcon
          count={surface}
          icon={<BiArea className="text-[20px]" />}
        />
      </div>
      <div className="text-violet-500 font-semibold">${price}</div>
    </div>
  );
};

export default HousesItem;
