import { Todo } from "./types";
import "./App.css";
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
      {items.map((item, index) => (
        <li key={index} onClick={() => onClick?.(item)}>
          {item.text}
          <button className="btn-delete" onClick={() => onDelete?.(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
