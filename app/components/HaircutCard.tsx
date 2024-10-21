import React from "react";
import { haircuts } from "../constants/Haircuts";
import Link from "next/link";
import { Card } from "@/components/ui/card";

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
          <Link
            href={`/haircut/${haircut.name}`}
            className="flex w-full px-3 py-1.5 flex-col items-start"
          >
            <div className="w-full flex text-2xl max-md:text-xl justify-between font-semibold">
              <span>{haircut.name}</span>
              <span>{formatPriceArs.format(haircut.price)}</span>
            </div>
            <p className="text-balance text-gray-500">{haircut.description}</p>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default HaircutCard;
