import authReducer from "./authReducer";
import propertyReducer from "./propertyReducer";
import tenantReducer from "./tenantReducer";
import transactionReducer from "./transactionReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  project: propertyReducer,
  tenant: tenantReducer,
  transaction: transactionReducer,
});

export default rootReducer;
