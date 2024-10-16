import React from "react";
import { haircuts } from "../constants/Haircuts";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const formatPriceArs = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumSignificantDigits: 2,
});

function HaircutCard() {
  return (
    <div className="flex flex-col p-2 gap-5">
      {haircuts.map((haircut) => (
        <div key={haircut.name}>
          <Link
            
            href={`/haircuts/${haircut.name.toLowerCase()}`}
            className={buttonVariants({
              variant: "outline",
              className: " py-10 flex flex-col w-full",
            })}
          >
            <h1 className="text-3xl flex">
              {haircut.name} - {formatPriceArs.format(haircut.price)}
            </h1>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default HaircutCard;
