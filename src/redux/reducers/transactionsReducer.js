import uuid from "react-native-uuid";
const initialState = {
  newTransaction: {},
  transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const newTransaction = {
      id: uuid.v4(),
      date: action.payload.date,
      paymentMethod: action.payload.paymentMethod,
      property: action.payload.property,
      transactionCategory: action.payload.transactionCategory,
      transactionType: action.payload.transactionType,
    };
    const transactions = [...state.transactions, newTransaction];
    return {
      newTransaction: {},
      transactions,
    };
  }
  if (action.type === "DELETE_TRANSACTION") {
    const transactions = state.transactions.filter(
      ({ id }) => id !== action.id
    );
    return {
      newTransaction: {},
      transactions,
    };
  }
  return state;
};

export default transactionsReducer;
