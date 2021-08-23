import { listReducer } from "./list";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  listState: listReducer,
});
