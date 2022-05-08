import "../styles/App.css";
import ListItem from "./ListItem";
import { useTypedSelector } from "./hooks/useReduxHook";
const List: React.FunctionComponent<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>
> = ({ style, ...rest }) => {
  // const { todos } = useContext(TodosContext);
  const todos = useTypedSelector((state) => state.todo.todos);
  return (
    <ul
      {...rest}
      style={{
        ...style,
        listStyleType: "none",
      }}>
      {todos.map((todo) => (
        <ListItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
      ))}
    </ul>
  );
};

export default List;
