import "../styles/App.css";
import { TodosProvider } from "./context/todoContext";
import { useTodos } from "./hooks/useTodos";
import Input from "./Input";
import List from "./List";

function App() {
  const { todos, addTodo, removeTodo, checkTodo } = useTodos([]);
  return (
    <div className="App">
      <TodosProvider initialTodo={[]}>
        <Input onAdd={addTodo} />
        <List items={todos} onDelete={removeTodo} onCheck={checkTodo} />
      </TodosProvider>
    </div>
  );
}

export default App;
