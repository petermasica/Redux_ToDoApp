import { SET_VISIBILITY_FILTER } from "../constants";

export const VisibilityFilter = (state="SHOW_ALL", action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
