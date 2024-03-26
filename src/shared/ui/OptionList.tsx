export interface OptionListProps {
  options?: string[];
}

export function OptionList({ options = [] }: OptionListProps): React.ReactNode {
  return (
    <>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </>
  );
}
