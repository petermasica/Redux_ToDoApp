/*
 * action types
 */

// used in listActions.js and lists.js (reducer)
export const ADD_LIST = "ADD_LIST";
export const REMOVE_LIST = "REMOVE_LIST";

// used in todosActions.js and todos.js (reducer)
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

// used in showAddTodoCont.js (reducer)
export const SHOW_ADD_TODO_CONTAINER = "SHOW_ADD_TODO_CONTAINER";

// used in VisibilityFilterActions.js and VisibilityFilter.js (reducer)
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";



/*
 * other constants
 */

 export const VisibilityFilters = {
   SHOW_ALL: "SHOW_ALL",
   SHOW_COMPLETED: "SHOW_COMPLETED",
   SHOW_ACTIVE: "SHOW_ACTIVE"
 }
