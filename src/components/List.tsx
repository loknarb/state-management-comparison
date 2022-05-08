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
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          onDelete={() => onDelete?.(todo.id)}
          onCheck={() => onCheck?.(todo.id)}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};

export default List;
