import { Todo } from "./types";
import "./App.css";
import ListItem from "./ListItem";
const List: React.FunctionComponent<{
  items: Todo[];
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
}> = ({ items, onCheck, onDelete }) => {
  return (
    <ul
      style={{
        listStyleType: "none",
      }}>
      {items.map((item) => (
        // <li key={index} onClick={() => onClick?.(item)}>
        //   {item.text}
        //   <button className="btn-delete" onClick={() => onDelete?.(index)}>
        //     Delete
        //   </button>
        // </li>
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
