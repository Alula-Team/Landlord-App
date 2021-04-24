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
