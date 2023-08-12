import React from "react";

import image from "../assets/img/house-banner.png";

const Banner: React.FC = () => {
  return (
    <section className="h-full max-h-[640px]mb-8 lg:mb-24">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:ml-8 ml-4 flex flex-col flex-1 mx-auto lg:max-w-[520px] items-center justify-center gap-3 lg:items-start mb-8">
          <h1 className="text-5xl font-extrabold">
            <span className="text-violet-800">Rent</span> Your Dream house with us
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
            velit unde eaque laudantium sequi, explicabo aspernatur quam
            perferendis possimus ratione atque animi blanditiis. Explicabo
            laudantium ea, perferendis voluptatem omnis ex.
          </p>
        </div>
        <div className="hidden lg:flex justify-end items-end flex-1">
          <img src={image} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
