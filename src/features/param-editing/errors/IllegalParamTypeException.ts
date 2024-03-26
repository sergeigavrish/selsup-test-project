import { ParamType } from "../types/Param/Param";

export class IllegalParamTypeException extends Error {
  constructor(type: ParamType) {
    super(`Param with type ${type} is not supported`);
    Object.setPrototypeOf(this, IllegalParamTypeException.prototype);
  }
}
