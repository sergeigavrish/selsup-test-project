export type ParamType = "string" | "select";

export type Param = {
  id: number;
  name: string;
  type: ParamType;
  options?: string[];
};

export interface ParamValue {
  paramId: number;
  value: string;
}
