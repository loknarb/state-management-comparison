import "../styles/App.css";
import { useTodos } from "./hooks/useTodos";
import Input from "./Input";
import List from "./List";

function App() {
  const { todos, addTodo, removeTodo, checkTodo } = useTodos([]);
  return (
    <div className="App">
      <Input onAdd={addTodo} />
      <List items={todos} onDelete={removeTodo} onCheck={checkTodo} />
    </div>
  );
}

export default App;
