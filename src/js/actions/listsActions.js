import { ADD_LIST, REMOVE_LIST } from "../constants";

export const addList = (id, listName) => {
  return {
    type: ADD_LIST,
    payload: {
      id,
      listName
    }
  };
}

export const removeList = (id) => {
  return {
    type: REMOVE_LIST,
    payload: id
  }
};
