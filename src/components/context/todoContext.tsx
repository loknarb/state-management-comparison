import React, { createContext } from "react";
import { UseTodosFC } from "../../types/types";
import { useTodos } from "../hooks/useTodos";

const TodoContext = createContext<UseTodosFC>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  checkTodo: () => {},
});

export const TodosProvider: React.FC<{
  initialTodo: UseTodosFC["todos"];
  children: React.ReactNode;
}> = ({ initialTodo, children }) => {
  // const {addTodo, removeTodo, checkTodo, todos }= useTodos(initialTodo)
  return <TodoContext.Provider value={useTodos(initialTodo)}>{children}</TodoContext.Provider>;
};
