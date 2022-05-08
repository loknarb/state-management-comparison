import { Todo } from "../types/types";
import "../styles/App.css";
import CheckBoxEmpty from "./CheckBoxEmpty";
import CheckBoxFilled from "./CheckBoxFilled";
import WarningButton from "./WarningButton";
import { useTypedDispatch } from "./hooks/useReduxHook";
import { removeTodo } from "../stores/todo-slice";
const ListItem: React.FunctionComponent<{
  id: Todo["id"];
  text: Todo["text"];
  completed: Todo["completed"];
}> = ({ text, id, completed }) => {
  // const { removeTodo } = useContext(TodosContext);
  const dispatch = useTypedDispatch();
  return (
    <li style={{ display: "flex", alignItems: "center" }}>
      {!completed ? <CheckBoxEmpty id={id} /> : <CheckBoxFilled id={id} />}
      {text}
      <WarningButton onClick={() => dispatch(removeTodo(id))} className="btn-delete">
        Delete
      </WarningButton>
    </li>
  );
};

export default ListItem;
