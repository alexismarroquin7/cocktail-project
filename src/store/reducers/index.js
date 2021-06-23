import { combineReducers } from "redux";
import drinksReducer from "./drinksReducer";

const reducers = {
  drink: drinksReducer
}

export const reducer = combineReducers(reducers);