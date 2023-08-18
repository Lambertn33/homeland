import React from "react";
import { HouseInterface } from "../../../interfaces/House";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const HouseDetails: React.FC<{ house: HouseInterface }> = ({ house }) => {
  return (
    <div>
      <div className="mb-4">
        <Link to="/">
          <BiArrowBack size={32} className="text-violet-600 font-bold" />
        </Link>
      </div>
      <div className="flex lg:justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold">{house.name}</h2>
          <h3 className="text-lg mb-4">{house.address}</h3>
        </div>
        <div className="flex items-center gap-x-2 text-sm flex-col md:flex-row">
          <div className="bg-green-500 px-3 text-white rounded-full">
            {house.type}
          </div>
          <div className="bg-violet-500 px-3 text-white rounded-full">
            {house.country}
          </div>
        </div>
        <div className="text-3xl font-semibold text-violet-600">
          $ {house.price}
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
