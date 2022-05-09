import "../styles/App.css";
import ListItem from "./ListItem";
// import { useTypedSelector } from "./hooks/useReduxHook";
import useTodos from "./hooks/useZustandHook";
const List: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ style, ...rest }) => {
  // const { todos } = useContext(TodosContext);
  // const todos = useTypedSelector((state) => state.todo.todos);
  // * zustand
  const { todos } = useTodos((state) => state);
  return (
    <ul
      {...rest}
      style={{
        ...style,
        listStyleType: "none",
        paddingLeft: "0.5rem",
      }}>
      {todos.map((todo) => (
        <ListItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default List;
