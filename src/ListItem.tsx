import { Todo } from "./types";
import "./App.css";
import CheckBoxEmpty from "./CheckBoxEmpty";
import CheckBoxFilled from "./CheckBoxFilled";
const ListItem: React.FunctionComponent<{
  key: Todo["id"];
  onDelete: (id: Todo["id"]) => void;
  onCheck: (id: Todo["id"]) => void;
  text: Todo["text"];
  completed: Todo["completed"];
}> = ({ text, onDelete, onCheck, key, completed }) => {
  return (
    <li>
      {completed ? (
        <CheckBoxEmpty onCheck={onCheck(key)} />
      ) : (
        <CheckBoxFilled onCheck={onCheck(key)} />
      )}
      {text}
      <button onClick={() => onDelete(key)} className="btn-delete">
        Delete
      </button>
    </li>
  );
};

export default ListItem;
