import { ParamType } from "../types/Param/Param";
import { SelectParamFieldFactory } from "./SelectParamFieldFactory";
import { TextParamFieldFactory } from "./TextParamFieldFactory";

type ParamFieldFactories =
  | ReturnType<typeof TextParamFieldFactory>
  | ReturnType<typeof SelectParamFieldFactory>;
export const ParamTypeToParamFieldMap: Readonly<
  Record<ParamType, ParamFieldFactories>
> = {
  string: TextParamFieldFactory(),
  select: SelectParamFieldFactory(),
};
