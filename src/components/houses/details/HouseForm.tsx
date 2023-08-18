import React from "react";
import { Link } from "react-router-dom";
import { HouseInterface } from "../../../interfaces/House";

const HouseForm: React.FC<{ house: HouseInterface }> = ({ house }) => {
  return (
    <div className="flex-1 bg-white w-full mb-8 border border-gray-300 px-6 py-8">
      <div className="flex items-center gap-x-4 mb-8">
        <div className="w-25 h-25 border border-gray-300 rounded-full">
          <img src={house.agent.image} alt="" />
        </div>
        <div className="font-bold text-lg">{house.agent.name}</div>
        <Link to="" className="text-violet-700 text-sm">
          View Listings
        </Link>
      </div>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          name=""
          className="border border-gray-300 focus:border-violet-700 w-full rounded px-2 h-12"
          placeholder="your name"
        />
        <input
          type="text"
          name=""
          className="border border-gray-300 focus:border-violet-700 w-full rounded px-2 h-12"
          placeholder="your email"
        />
        <textarea
          name=""
          rows={5}
          className="border border-gray-300 focus:border-violet-700 w-full rounded resize-none p-4"
          placeholder="your message"
        ></textarea>
        <div className="flex flex-col gap-2 mt-8">
          <button className="bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded text-white w-full">
            Send Message
          </button>
          <button className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white w-full">
            Call
          </button>
        </div>
      </form>
    </div>
  );
};

export default HouseForm;
