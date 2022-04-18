import { combineReducers } from "redux";
import { testReducer } from "./testReducer";
import { test1Reducer } from "./test1Reducer";

export const reducer = combineReducers({ testReducer, test1Reducer });
