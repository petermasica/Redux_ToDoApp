import { ADD_TODO, TOGGLE_TODO } from "../constants";

export function addTodo(id, text) {
  return {
    type: ADD_TODO,
    payload: {
      id,
      text,
      complete: false
    }
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: id
  };
}
