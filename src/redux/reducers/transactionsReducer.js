import uuid from "react-native-uuid";
const initialState = {
  newTransaction: {},
  transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
//   const p = action.payload.transactionType;
  if (action.type === "ADD_TRANSACTION") {
    const newTransaction = {
      id: uuid.v4(),
      address: action.payload.address,
      transactionType: action.payload.transactionType,
      transactionCategory: action.payload.transactionCategory,
      date: action.payload.date,
      paymentMethod: action.payload.paymentMethod,
      amount: action.payload.amount,
      payment: action.payload.transactionType,
      
    };
    const transactions = [...state.transactions, newTransaction];
    return {
      newTransaction: {},
      transactions,
    };
  }
  if (action.type === "DELETE_TRANSACTION") {
    const transactions = state.transactions.filter(({ id }) => id !== action.id);
    return {
      newTransaction: {},
      transactions,
    };
  }
  return state;
};

export default transactionsReducer;
