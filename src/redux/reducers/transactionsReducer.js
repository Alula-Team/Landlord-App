const initialState = {
  newTransaction: {},
  transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const newTransaction = {
      address: action.payload.address,
      transactionCategory: action.payload.transactionCategory,
      date: action.payload.date,
      paymentMethod: action.payload.paymentMethod,
      amount: action.payload.amount,
      payment: action.payload.payment,
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
