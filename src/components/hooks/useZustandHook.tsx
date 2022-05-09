import { v4 as uuid } from "uuid";
import { Todo } from "../../types/types";
import create from "zustand";
const useTodos = create<{
  todos: Todo[];
  checkTodo: (id: Todo["id"]) => void;
  addTodo: (text: Todo["text"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}>((set) => ({
  todos: [],
  addTodo: (text: Todo["text"]) =>
    set((state) => ({
      todos: handleAddTodo(state.todos, text),
    })),
  removeTodo: (id: Todo["id"]) =>
    set((state) => ({
      todos: handleRemoveTodo(state.todos, id),
    })),
  checkTodo: (id: Todo["id"]) =>
    set((state) => ({
      todos: handleCheckTodo(state.todos, id),
    })),
}));

const handleCheckTodo = (todos: Todo[], id: Todo["id"]): Todo[] => {
  return todos.map((todo) => ({
    ...todo,
    completed: todo.id === id ? !todo.completed : todo.completed,
  }));
};
const handleRemoveTodo = (todos: Todo[], id: Todo["id"]): Todo[] => {
  return todos.filter((todo) => todo.id !== id);
};

const handleAddTodo = (todos: Todo[], text: Todo["text"]): Todo[] => {
  return [...todos, { id: uuid(), text, completed: false }];
};

export default useTodos;
