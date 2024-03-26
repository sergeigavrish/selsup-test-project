import { ParamValue } from "../Param/Param";

export interface Model {
  paramValues: ParamValue[];
}

export interface ModelValue {
  name: string;
  value: ParamValue["value"];
}
