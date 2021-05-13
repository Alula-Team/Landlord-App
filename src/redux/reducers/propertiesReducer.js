import uuid from "react-native-uuid";
const initialState = {
  newProperty: {},
  properties: [
    {
      id: uuid.v4(),
      address: "2486 Fresno Avenue Canyon",
      city: "Las Weegas",
      state: "NV",
      zip: "89123",
      vacant: false,
    },
    {
      id: uuid.v4(),
      address: "8393 Some Other Drive",
      city: "Los Tacos",
      state: "NV",
      zip: "27844",
      vacant: false,
    },
  ],
};

const propertiesReducer = (state = initialState, action) => {
  if (action.type === "ADD_PROPERTY") {
    let propertyArray = [];
    if (action.payload.units.length) {
      for (var i = 0; i < action.payload.units.length; i++) {
        let oneProperty = {
          id: uuid.v4(),
          address: action.payload.address,
          unit: action.payload.units[i].number,
          city: action.payload.city,
          state: action.payload.state,
          zip: action.payload.zipCode,
          vacant: true,
        };
        propertyArray.push(oneProperty);
      }
      const properties = [...state.properties, ...propertyArray];
      return {
        properties,
      };
    } else {
      const newProperty = {
        id: uuid.v4(),
        address: action.payload.address,
        unit: action.payload.units,
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
  }
  if (action.type === "UPDATE_PROPERTY") {
    const properties = state.properties.map((item) => {
      if (item.id !== action.id) {
        return item;
      }
      return {
        ...item,
        ...action.payload,
      };
    });
    return {
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
