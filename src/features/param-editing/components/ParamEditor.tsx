import { Model } from "../types/Model/Model";
import { Param, ParamValue } from "../types/Param/Param";
import { NoSuchParamException } from "../errors/NoSuchParamException";
import { ParamForm } from "./ParamsForm";
import { ParamFieldAbstractFactory } from "../factories/ParamFieldAbstractFactory";

interface ParamEditorProps {
  params: Param[];
  model: Model;
  handleModelChange: (value: ParamValue["value"], id: number) => void;
  handleSave: () => void;
}

export function ParamEditor({
  params,
  model,
  handleModelChange,
  handleSave,
}: ParamEditorProps) {
  function getParamById(id: number): Param | undefined {
    return params.find((param) => param.id === id);
  }

  function getParamField(paramValue: ParamValue, index: number) {
    const param = getParamById(paramValue.paramId);
    if (!param) {
      throw new NoSuchParamException(paramValue.paramId);
    }
    const { name, type } = param;
    const Component = ParamFieldAbstractFactory(type);
    return (
      <Component
        param={param}
        paramValue={paramValue}
        label={name}
        name={name + index}
        key={index}
        onModelChange={(value: ParamValue["value"]) =>
          handleModelChange(value, index)
        }
      />
    );
  }

  return (
    <section className="border rounded-lg">
      <div className="py-8 px-6">
        <ParamForm onClick={() => handleSave()}>
          {model.paramValues.map((paramValue, index) =>
            getParamField(paramValue, index),
          )}
        </ParamForm>
      </div>
    </section>
  );
}
