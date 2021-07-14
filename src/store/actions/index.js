export const thunkAddProperty = (payload) => (dispatch) => {
  return setTimeout(() => {
    dispatch({
      type: "ADD_PROPERTY",
      payload,
    });
  }, 9999);
};

export const doAddProperty = (payload) => {
  return {
    type: "ADD_PROPERTY",
    payload,
  };
};

export const doUpdateProperty = (id, payload) => {
  return {
    type: "UPDATE_PROPERTY",
    id,
    payload,
  };
};

export const doDeleteProperty = (id) => {
  return {
    type: "DELETE_PROPERTY",
    id,
  };
};

export const doAddTransaction = (payload) => {
  return {
    type: "ADD_TRANSACTION",
    payload,
  };
};

export const doDeleteTransaction = (id) => {
  return {
    type: "DELETE_TRANSACTION",
    id,
  };
};

export const doAddTenant = (payload) => {
  return {
    type: "ADD_TENANT",
    payload,
  };
};

export const doDeleteTenant = (id) => {
  return {
    type: "DELETE_TENANT",
    id,
  };
};
