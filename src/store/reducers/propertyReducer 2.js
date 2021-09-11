const initialState = {
  newProperty: {},
  properties: [
    {
      id: "1",
      address: "2386 Fresno Canyon Avenue",
      city: "Los Tacos",
      state: "NV",
      zip: "89123",
      unit: "",
    },
    {
      id: "2",
      address: "108 Verygold Lion",
      city: "Los Tacos",
      state: "NV",
      zip: "89107",
      unit: "",
    },
    {
      id: "3",
      address: "58 Harmony Avenude",
      city: "Las Tenakas",
      state: "NV",
      zip: "89119",
      unit: "",
    },
  ],
};

const propertyReducer = (state = initialState, action) => {
  if (action.type === "ADD_PROPERTY") {
    let propertyArray = [];
    if (action.payload.units.length) {
      for (var i = 0; i < action.payload.units.length; i++) {
        let oneProperty = {
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

export default propertyReducer;
