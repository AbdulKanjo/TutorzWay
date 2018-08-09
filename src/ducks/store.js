import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise-middleware";

import userReducer from "./userReducer";

const middlewares = applyMiddleware(promiseMiddleware());

const store = createStore(userReducer, middlewares);

export default store;
