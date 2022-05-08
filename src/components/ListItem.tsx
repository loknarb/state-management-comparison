import { Todo } from "../types/types";
import "../styles/App.css";
import CheckBoxEmpty from "./CheckBoxEmpty";
import CheckBoxFilled from "./CheckBoxFilled";
import WarningButton from "./WarningButton";
import { useContext } from "react";
import { TodosContext } from "./context/todoContext";
const ListItem: React.FunctionComponent<{
  id: Todo["id"];
  text: Todo["text"];
  completed: Todo["completed"];
}> = ({ text, id, completed }) => {
  const { removeTodo } = useContext(TodosContext);
  return (
    <li>
      {!completed ? <CheckBoxEmpty id={id} /> : <CheckBoxFilled id={id} />}
      {text}
      <WarningButton onClick={() => removeTodo(id)} className="btn-delete">
        Delete
      </WarningButton>
    </li>
  );
};

export default ListItem;
