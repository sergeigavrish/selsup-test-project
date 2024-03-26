export interface LabelProps {
  label: string;
  name: string;
}

export function Label({ label, name }: LabelProps): React.ReactNode {
  return (
    <label htmlFor={name} className="text-sm pb-2">
      {label}
    </label>
  );
}
