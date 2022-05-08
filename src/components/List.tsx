import { Todo } from "../types/types";
import "../styles/App.css";
import ListItem from "./ListItem";
import { useContext } from "react";
import { TodosContext } from "./context/todoContext";
const List = ({
  onCheck,
  onDelete,
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement> & {
  onCheck: (id: Todo["id"]) => void;
  onDelete: (id: Todo["id"]) => void;
}) => {
  const { todos } = useContext(TodosContext);
  return (
    <ul
      style={{
        listStyleType: "none",
      }}>
      {todos.map((item) => (
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
