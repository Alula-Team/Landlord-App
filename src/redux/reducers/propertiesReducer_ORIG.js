import uuid from "react-native-uuid";
const initialState = {
  newProperty: {},
  properties: [],
};

const propertiesReducer = (state = initialState, action) => {
  if (action.type === "ADD_PROPERTY") {
    const newProperty = {
      id: uuid.v4(),
      address: action.payload.address,
      unit: action.payload.unit,
      city: action.payload.city,
      state: action.payload.states,
      zip: action.payload.zipCode,
      vacant: true,
    };
    const properties = [...state.properties, newProperty];
    return {
      newProperty: {},
      properties,
    };
  }
  if (action.type === "DELETE_PROPERTY") {
    const properties = state.properties.filter(({ id }) => id !== action.id);
    return {
      newProperty: {},
      properties,
    };
  }
  return state;
};

export default propertiesReducer;
