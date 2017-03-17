import { applyMiddleware, createStore } from "redux";

// middleware
import logger from "redux-logger";

import reducer from "./reducers";

const middleware = applyMiddleware(logger());

export default createStore(reducer, middleware);
