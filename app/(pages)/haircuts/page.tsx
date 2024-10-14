import { auth, currentUser } from "@clerk/nextjs/server";
import React from "react";

async function HaircutPage() {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId || !user)
    return (
      <>
        <p>You are not logged</p>
      </>
    );


  return (
    
    <div>
      <h1 className="text-2xl font-">Welcome {user?.fullName}</h1>;
      <div className="flex flex-col ">
        <p>Haircuts</p>
        <p>Haircuts</p>
        <p>Haircuts</p>
        <p>Haircuts</p>
      </div>
    </div>
  );
}

export default HaircutPage;
