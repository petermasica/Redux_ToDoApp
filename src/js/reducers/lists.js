import { ADD_LIST, REMOVE_LIST } from "../constants";

export const lists = (state={}, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const { id, listName } = action.payload;
      const newList = {};
      newList[id] = listName;
      return Object.assign({}, state, newList);
    }
    case REMOVE_LIST: {
      const temp = Object.assign({}, state);
      delete temp[action.payload];
      return temp;
    }
    default:
      return state;
  }
}
