import { Todo } from "./types";
import "./App.css";
import ListItem from "./ListItem";
const List: React.FunctionComponent<{
  items: Todo[];
  onClick?: (item: Todo) => void;
  onDelete: (id: Todo["id"]) => void;
}> = ({ items, onClick, onDelete }) => {
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
        <ListItem key={item.id} onDelete={() => onDelete?.(item.id)} text={item.text} />
      ))}
    </ul>
  );
};

export default List;
