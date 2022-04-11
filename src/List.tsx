import { ListItem } from "./types";
const List: React.FunctionComponent<{ items: ListItem[]; onClick?: (item: ListItem) => void }> = ({
  items,
  onClick,
}) => {
  return (
    <ul
      style={{
        listStyleType: "none",
      }}>
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick?.(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
