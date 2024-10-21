import Link from "next/link";
import React from "react";

function DashboardView() {

  
  return (
    <main className="h-screen w-full">
      <div className="flex text-white font-semibold flex-col justify-center items-center mt-20">
        <h1>Don't have reserve?</h1>
        <Link className="bg-black p-2 rounded-xl" href="/haircuts">Reserve here</Link>
      </div>
    </main>
  );
}

export default DashboardView;
