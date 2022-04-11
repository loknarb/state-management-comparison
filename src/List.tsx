import { ListItem } from "./types";
const List: React.FunctionComponent<{ items: ListItem[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
};

export default List;
