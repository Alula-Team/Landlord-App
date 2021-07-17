import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase/firebase";
import { collectIdsAndData } from "../utilities";

export const TransactionsContext = createContext();

const TransactionsProvider = (props) => {
  const [transactions, setTransactions] = useState([]);

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    async function getTransactions() {
      unsubscribeFromFirestore = await db
        .collection("transactions")
        .onSnapshot((snapshot) => {
          const transactions = snapshot.docs.map(collectIdsAndData);
          if (mounted) setTransactions(transactions);
        });
    }
    getTransactions();
    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    };
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
