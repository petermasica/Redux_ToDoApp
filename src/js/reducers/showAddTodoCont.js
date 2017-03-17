import { SHOW_ADD_TODO_CONTAINER } from "../constants";

export const showAddTodoCont = (state=true, action) => {
  switch(action.type) {
    case SHOW_ADD_TODO_CONTAINER:
      return !state;
    default:
      return state;
  }
}
