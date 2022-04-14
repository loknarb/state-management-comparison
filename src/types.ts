export interface ListItem {
  name: string;
}

export interface Payload {
  name: string;
}

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export type ActionType = { type: "ADD"; text: string } | { type: "DELETE"; id: number };
