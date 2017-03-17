import { combineReducers } from "redux";

import { lists } from "./lists"
import { showAddTodoCont } from "./showAddTodoCont";
import { todos } from "./todos";
import { VisibilityFilter } from "./VisibilityFilter";

// add todos reducer later on ...
export default combineReducers({lists, showAddTodoCont, VisibilityFilter});
