import React from "react";
import { haircuts } from "../constants/Haircuts";
import Link from "next/link";

import { Card } from "@/components/ui/card";

import { buttonVariants } from "@/components/ui/button";

const formatPriceArs = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumSignificantDigits: 2,
});

function HaircutCard() {
  return (
    <div className="flex flex-col p-2 gap-3">
      {haircuts.map((haircut) => (
        <Card key={haircut.name}>
          <div key={haircut.name}>
            <Link
              href={`/haircuts/${haircut.name.toLowerCase()}`}
              className={buttonVariants({
                variant: "outline",
                className: " py-10 flex flex-col w-full",
              })}
            >
              <div className="w-full flex text-2xl max-md:text-xl justify-between font-semibold">
                <span>{haircut.name}</span>
                <span>{formatPriceArs.format(haircut.price)}</span>
              </div>
              <p className="text-balance text-gray-500">
                {haircut.description}
              </p>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default HaircutCard;
