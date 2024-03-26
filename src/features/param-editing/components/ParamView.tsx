import { List } from "../../../shared/ui/List";
import { ModelValue } from "../types/Model/Model";

export interface ParamViewProps {
  modelValues: ModelValue[];
}

export function ParamView({ modelValues }: ParamViewProps) {
  function getItems() {
    return modelValues.map((item) => `${item.name}: ${item.value}`);
  }

  return (
    <section className="border rounded-lg">
      <div className="py-8 px-6">
        <List items={getItems()} />
      </div>
    </section>
  );
}
