import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import CardHaircut from "../components/HaircutCard";
import { InfoCutTime } from "../components/InfoCutTIme";

async function HaircutView() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) return <>{/* <Error /> */}</>;

  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-3xl mt-5 font-bold text-white">
        Welcome {user?.firstName}
      </h1>
      <p className="text-white text-xl">Choose your haircut <InfoCutTime /></p>
      <div className="w-full">
        <CardHaircut />
      </div>
    </div>
  );
}

export default HaircutView;
