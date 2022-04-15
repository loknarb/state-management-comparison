import { Todo } from "./types";
import "./App.css";
import CheckBoxEmpty from "./CheckBoxEmpty";
const ListItem: React.FunctionComponent<{
  key: Todo["id"];
  onDelete: (id: Todo["id"]) => void;
  text: Todo["text"];
}> = ({ text, onDelete, key }) => {
  return (
    <li>
      <CheckBoxEmpty />
      {text}
      <button onClick={() => onDelete(key)} className="btn-delete">
        Delete
      </button>
    </li>
  );
};

export default ListItem;
