import { Field, FieldProps } from "./Field";
import { OptionList, OptionListProps } from "./OptionList";

export type SelectFieldProps = FieldProps &
  OptionListProps &
  React.ComponentProps<"select">;

export function SelectField(props: SelectFieldProps): React.ReactNode {
  const { name, label, children, options, ...rest } = props;
  const fieldProps: FieldProps = { name, label };
  const selectProps = { ...rest, name };
  return (
    <Field {...fieldProps}>
      <select
        {...selectProps}
        id={name}
        className="text-base py-1 px-3 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:outline-0 focus:shadow transition-all duration-200"
      >
        <OptionList options={options} />
      </select>
    </Field>
  );
}
