import { useTodos } from "../components/hooks/useTodos";
export interface ListItem {
  name: string;
}

export interface Payload {
  name: string;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}
export type ActionType =
  | { type: "ADD"; text: Todo["text"] }
  | { type: "DELETE"; id: Todo["id"] }
  | { type: "TOGGLE_CHECK"; id: Todo["id"] };

export type UseTodosFC = ReturnType<typeof useTodos>;
