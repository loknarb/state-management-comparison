import { Todo } from "../types/types";
// import { checkTodo } from "../stores/todo-slice";
// import { useTypedDispatch } from "./hooks/useReduxHook";
import useTodos from "./hooks/useZustandHook";
const CheckBoxEmpty: React.FunctionComponent<{
  id: Todo["id"];
}> = ({ id }) => {
  // const { checkTodo } = useContext(TodosContext);
  // const dispatch = useTypedDispatch();
  const { checkTodo } = useTodos((state) => state);
  return (
    <svg
      style={{
        marginLeft: "0.5rem",
        marginRight: "0.5rem",
      }}
      onClick={() => checkTodo(id)}
      // onClick={() => dispatch(checkTodo(id))} # got rid of redux to show zustand
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="currentColor"
      className="bi bi-square"
      viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
    </svg>
  );
};

export default CheckBoxEmpty;
