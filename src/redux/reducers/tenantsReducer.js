import uuid from "react-native-uuid";
const initialState = {
  newTenant: {},
  tenants: [],
};

const tenantsReducer = (state = initialState, action) => {
  if (action.type === "ADD_TENANT") {
    const newTenant = {
      id: uuid.v4(),
      name: action.payload.tenantName,
      email: action.payload.tenantEmail,
      phone: action.payload.tenantPhoneNumber,
      archived: true,
    };
    const tenants = [...state.tenants, newTenant];
    return {
      newTenant: {},
      tenants,
    };
  }
  if (action.type === "DELETE_TENANT") {
    const tenants = state.tenants.filter(({ id }) => id !== action.id);
    return {
      newTenant: {},
      tenants,
    };
  }
  return state;
};

export default tenantsReducer;
