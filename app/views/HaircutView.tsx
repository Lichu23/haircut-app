import React from "react";
import CardHaircut from "../components/HaircutCard";

async function HaircutView() {


  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl mt-5 font-bold text-white">
        Welcome To The SalonBarber
      </h1>
      <p className="text-white text-xl">Choose your haircut </p>
      <div className="max-md:w-full w-[600px]">
        <CardHaircut />
      </div>
    </div>
  );
}

export default HaircutView;
