import propertiesReducer from "./propertiesReducer";
import tenantsReducer from "./tenantsReducer";
import transactionsReducer from "./transactionsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  properties: propertiesReducer,
  tenants: tenantsReducer,
  transactions: transactionsReducer,
});

export default rootReducer;
