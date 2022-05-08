import { Todo } from "../types/types";
import "../styles/App.css";
import ListItem from "./ListItem";
const List = ({
  items,
  onCheck,
  onDelete,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
  items: Todo[];
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
}) => {
  return (
    <ul
      style={{
        listStyleType: "none",
      }}>
      {items.map((item) => (
        <ListItem
          key={item.id}
          id={item.id}
          onDelete={() => onDelete?.(item.id)}
          onCheck={() => onCheck?.(item.id)}
          text={item.text}
          completed={item.completed}
        />
      ))}
    </ul>
  );
};

export default List;
