import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";
import CardHaircut from "../components/HaircutCard";

async function HaircutView() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user) return <><p>Error</p></>;

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <h1 className="text-3xl mt-5 font-bold text-white">
        Welcome {user?.firstName}
      </h1>
      <p className="text-white text-xl">Choose your haircut </p>
      <div className="max-md:w-full w-[600px]">
        <CardHaircut />
      </div>
    </div>
  );
}

export default HaircutView;
