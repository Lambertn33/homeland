import React, { useContext } from "react";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import { HousesContext } from "../store/houses-context";
import { HouseInterface } from "../interfaces/House";
import HouseForm from "../components/houses/details/HouseForm";
import HouseIcons from "../components/houses/details/HouseIcons";
import HouseDetails from "../components/houses/details/HouseDetails";

const House: React.FC = () => {
  const { houseId } = useParams();
  const housesCtx = useContext(HousesContext);
  const house: HouseInterface = housesCtx.houses.find(
    (h) => h.id === parseInt(houseId!)
  )!;

  return (
    <Wrapper>
      <section>
        <div className="container mx-auto mb-14 min-h-[800px] px-8">
          <HouseDetails house={house} />
          <div className="flex flex-col items-start gap-8 lg:flex-row">
            <div className="max-w-[768px]">
              <div className="mb-8">
                <img src={house.imageLg} alt="" />
              </div>
              <HouseIcons house={house} />
              <div>{house.description}</div>
            </div>
            <HouseForm house={house} />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default House;
