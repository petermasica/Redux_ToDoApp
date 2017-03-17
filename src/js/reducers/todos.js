import { ADD_TODO, TOGGLE_TODO } from "../constants";

export const todos = (state=[], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return state.map( todo => {
        if (todo.id === action.payload)
          return Object.assign({}, todo, {complete: !todo.complete});
        else
          return todo;
      });
    default:
      return state;
  }
}
