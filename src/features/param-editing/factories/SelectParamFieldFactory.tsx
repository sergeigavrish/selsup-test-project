import { SelectField, SelectFieldProps } from "../../../shared/ui/Select";
import { Param, ParamValue } from "../types/Param/Param";

interface SelectParamFieldProps extends SelectFieldProps {
  param: Param;
  paramValue: ParamValue;
  onModelChange: (value: ParamValue["value"]) => void;
}

export function SelectParamFieldFactory() {
  return function ({
    param,
    paramValue,
    onModelChange,
    ...rest
  }: SelectParamFieldProps) {
    return (
      <SelectField
        {...rest}
        value={paramValue.value}
        options={param.options || []}
        onChange={(event) => onModelChange(event.target.value)}
      />
    );
  };
}
