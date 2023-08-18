import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { useParams, Link } from "react-router-dom";
import { HousesContext } from "../store/houses-context";
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import { HouseInterface } from "../interfaces/House";

const HouseDetails: React.FC = () => {
  const { houseId } = useParams();
  const housesCtx = useContext(HousesContext);
  const house: HouseInterface = housesCtx.houses.find(
    (h) => h.id === parseInt(houseId!)
  )!;
  console.log(house);

  return (
    <Wrapper>
      <section>
        <div className="container mx-auto mb-14 min-h-[800px] px-8">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold">{house.name}</h2>
              <h3 className="text-lg mb-4">{house.address}</h3>
            </div>
            <div className="flex items-center gap-x-2 text-sm">
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
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <img src={house.imageLg} alt="" />
              </div>
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
              <div>{house.description}</div>
            </div>
            <div className="flex-1 bg-white w-full mb-8 border border-gray-300 px-6 py-8">
              <div className="flex items-center gap-x-4 mb-8">
                <div className="w-25 h-25 border border-gray-300 rounded-full">
                  <img src={house.agent.image} alt="" />
                </div>
                <div className="font-bold text-lg">
                  {house.agent.name}
                </div>
                <Link to='' className="text-violet-700 text-sm">View Listings</Link>
              </div>
              <form className="flex flex-col gap-4">
                <input type="text" name="" className="border border-gray-300 focus:border-violet-700 w-full rounded px-2 h-12" placeholder="your name"/>
                <input type="text" name="" className="border border-gray-300 focus:border-violet-700 w-full rounded px-2 h-12" placeholder="your email"/>
                <textarea name="" rows={5} className="border border-gray-300 focus:border-violet-700 w-full rounded resize-none p-4" placeholder="your message"></textarea>
                <div className="flex flex-col gap-2 mt-8">
                  <button className="bg-violet-700 hover:bg-violet-800 px-4 py-2 rounded text-white w-full">Send Message</button>
                  <button className="bg-green-700 hover:bg-green-800 px-4 py-2 rounded text-white w-full">Call</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default HouseDetails;
