import propertiesReducer from "./propertiesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ properties: propertiesReducer });

export default rootReducer;
