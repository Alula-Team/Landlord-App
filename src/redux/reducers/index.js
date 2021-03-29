import propertiesReducer from "./propertiesReducer";
import tenantsReducer from "./tenantsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  properties: propertiesReducer,
  tenants: tenantsReducer,
});

export default rootReducer;
