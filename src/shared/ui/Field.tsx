import { Label, LabelProps } from "./Label";

export type FieldProps = LabelProps & React.PropsWithChildren;

export function Field({
  children,
  ...labelProps
}: FieldProps): React.ReactNode {
  return (
    <div className="mb-6">
      <div className="flex flex-col">
        <Label {...labelProps}></Label>
        {children}
      </div>
    </div>
  );
}
