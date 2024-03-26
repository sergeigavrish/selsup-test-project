export interface ListProps {
  items: string[];
}

export function List({ items }: ListProps) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
