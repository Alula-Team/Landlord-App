import uuid from "react-native-uuid";
const initialState = {
  newTransaction: {},
  transactions: [
    {
      id: uuid.v4(),
      address: "108 Fresno Drive",
      transactionCategory: "Payment",
      date: "March 14th, 2021",
      paymentMethod: "Credit Card",
      amount: 1600,
      payment: "Payment",
    },
    {
      id: uuid.v4(),
      address: "2566 Marigold Drive",
      transactionCategory: "Expense",
      date: "April 28th, 2021",
      paymentMethod: "Credit Card",
      amount: 888,
      payment: "Expense",
    },
  ],
};

const transactionsReducer = (state = initialState, action) => {
  if (action.type === "ADD_TRANSACTION") {
    const newTransaction = {
      id: uuid.v4(),
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
