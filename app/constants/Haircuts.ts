import { HaircutsInterface } from "../Interfaces/haircutsInterface";

const formatPriceArs = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
});

export const haircuts: HaircutsInterface[] = [
  {
    name: "Corte Semanal",
    price: 5000,
    time: 30,
  },
  {
    name: "Corte Normal",
    price: 6000,
    time: 30,
  },
  {
    name: "Corte + Barba",
    price: 7500,
    time: 30,
  },
  {
    name: "Barba",
    price: 4500,
    time: 30,
  },
  {
    name: "Reflejos",
    price: 25000,
    time: 30,
  },
  {
    name: "Global",
    price: 30000,
    time: 30,
  },
];
