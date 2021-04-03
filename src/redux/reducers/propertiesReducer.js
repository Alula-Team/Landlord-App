import uuid from "react-native-uuid";
// import { normalProps as defaultProperties } from "../../normalizedState";
import defaultProperties from "../../dummyProperties";
const initialState = {
  newProperty: {},
  properties: [
    {
      id: "1",
      address: "123 Harmony Avenue",
      unit: "",
      city: "Las Vegas",
      state: "NV",
      zip: "89123",
      tenant: "1",
      transactions: ["1"],
      serviceRequests: ["1", "2"],
    },
    {
      id: "2",
      address: "108 Verigold Lane",
      unit: "",
      city: "Hendertucky",
      state: "NV",
      zip: "89052",
      tenant: "2",
      transactions: ["2", "3"],
      serviceRequests: ["3"],
    },
  ],
};

const propertiesReducer = (state = initialState, action) => {
  if (action.type === "ADD_PROPERTY") {
    const newProperty = {
      id: uuid.v4(),
      address: action.payload.address,
      unit: action.payload.unit,
      city: action.payload.city,
      state: action.payload.state,
      zip: action.payload.zipCode,
      vacant: true,
      tenant: null,
      transactions: [],
      serviceRequests: [],
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
