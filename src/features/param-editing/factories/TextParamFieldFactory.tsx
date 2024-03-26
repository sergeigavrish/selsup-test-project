import { InputField, InputFieldProps } from "../../../shared/ui/Input";
import { Param, ParamValue } from "../types/Param/Param";

interface TextParamFieldProps extends InputFieldProps {
  param: Param;
  paramValue: ParamValue;
  onModelChange: (value: ParamValue["value"]) => void;
}

export function TextParamFieldFactory() {
  return function ({
    param,
    paramValue,
    onModelChange,
    ...rest
  }: TextParamFieldProps) {
    return (
      <InputField
        {...rest}
        type="text"
        value={paramValue.value}
        onChange={(event) => onModelChange(event.target.value)}
      />
    );
  };
}
