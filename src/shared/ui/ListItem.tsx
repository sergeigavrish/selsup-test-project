export interface ListItem {
  value: string;
}

export function ListItem({ value }: ListItem) {
  return <li>{value}</li>;
}
