import { Param } from "../types/Param/Param";

export const paramsMock: Param[] = [
  {
    id: 1,
    name: "Назначение",
    type: "string",
  },
  {
    id: 2,
    name: "Длина",
    type: "string",
  },
  {
    id: 3,
    name: "Размер",
    options: ["XS", "S", "M", "L", "XL"],
    type: "select",
  },
];
