export const doAddProperty = (payload) => {
  return {
    type: "ADD_PROPERTY",
    payload,
  };
};

export const doDeleteProperty = (id) => {
  return {
    type: "DELETE_PROPERTY",
    id,
  };
};
