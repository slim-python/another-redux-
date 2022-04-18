import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import { reducer } from "./reducers/rootReducer";
const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
