import { useState } from "react";
import { Model, ModelValue } from "../types/Model/Model";
import { Param, ParamValue } from "../types/Param/Param";
import { modelMock } from "../mocks/modelMock";
import { paramsMock } from "../mocks/paramsMock";
import { ParamEditor } from "./ParamEditor";
import { NoSuchParamException } from "../errors/NoSuchParamException";
import { ParamView } from "./ParamView";
import ErrorBoundary from "../../../shared/errors/ErrorBoundary";

export function ParamController() {
  const [model, setModel] = useState<Model>(modelMock);
  const [modelValues, setModelValues] = useState<ModelValue[]>([]);

  function handleModelChange(value: ParamValue["value"], index: number): void {
    const oldModel = model.paramValues[index];
    setModel({
      ...model,
      paramValues: [
        ...model.paramValues.slice(0, index),
        { ...oldModel, value },
        ...model.paramValues.slice(index + 1),
      ],
    });
  }

  function handleSave() {
    const modelValues: ModelValue[] = model.paramValues.map((paramValue) => {
      const param = getParamById(paramValue.paramId);
      if (!param) {
        throw new NoSuchParamException(paramValue.paramId);
      }
      return { name: param.name, value: paramValue.value };
    });
    setModelValues(modelValues);
  }

  function getParamById(id: number): Param | undefined {
    return paramsMock.find((param) => param.id === id);
  }

  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <main className="grid gap-6 grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2">
        <ParamEditor
          params={paramsMock}
          model={model}
          handleModelChange={handleModelChange}
          handleSave={handleSave}
        />
        <ParamView modelValues={modelValues} />
      </main>
    </ErrorBoundary>
  );
}
