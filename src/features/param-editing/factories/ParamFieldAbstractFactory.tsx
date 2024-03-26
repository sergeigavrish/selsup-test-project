import { IllegalParamTypeException } from "../errors/IllegalParamTypeException";
import { ParamType } from "../types/Param/Param";
import { ParamTypeToParamFieldMap } from "./ParamTypeToParamFieldMap";

export function ParamFieldAbstractFactory(type: ParamType) {
  const Component = ParamTypeToParamFieldMap[type];
  if (!Component) {
    throw new IllegalParamTypeException(type);
  }
  return Component;
}
