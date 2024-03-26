import { Field, FieldProps } from "./Field";

export type InputFieldProps = FieldProps & React.ComponentProps<"input">;

export function InputField(props: InputFieldProps): React.ReactNode {
  const { name, label, ...rest } = props;
  const fieldProps: FieldProps = { name, label };
  const inputProps = { ...rest, name };
  return (
    <Field {...fieldProps}>
      <input
        {...inputProps}
        id={name}
        className="text-base py-1 px-3 border rounded-md hover:border-blue-300 focus:border-blue-500 focus:outline-0 focus:shadow transition-all duration-200"
      />
    </Field>
  );
}
