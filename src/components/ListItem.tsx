import { Todo } from "../types/types";
import "../styles/App.css";
import CheckBoxEmpty from "./CheckBoxEmpty";
import CheckBoxFilled from "./CheckBoxFilled";
const ListItem: React.FunctionComponent<{
  id: Todo["id"];
  onDelete: (id: Todo["id"]) => void;
  onCheck: (id: Todo["id"]) => void;
  text: Todo["text"];
  completed: Todo["completed"];
}> = ({ text, onDelete, onCheck, id, completed }) => {
  return (
    <li>
      {!completed ? (
        <CheckBoxEmpty onCheck={() => onCheck(id)} id={id} />
      ) : (
        <CheckBoxFilled onCheck={() => onCheck(id)} id={id} />
      )}
      {text}
      <button onClick={() => onDelete(id)} className="btn-delete">
        Delete
      </button>
    </li>
  );
};

export default ListItem;