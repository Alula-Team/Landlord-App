import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase/firebase";
import { collectIdsAndData } from "../utilities";

export const TenantsContext = createContext();

const TenantsProvider = (props) => {
  const [tenants, setTenants] = useState([]);

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    async function getTenants() {
      unsubscribeFromFirestore = await db
        .collection("tenants")
        .orderBy("name", "asc")
        .onSnapshot((snapshot) => {
          const tenants = snapshot.docs.map(collectIdsAndData);
          if (mounted) setTenants(tenants);
        });
    }
    getTenants();
    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    };
  }, []);

  return (
    <TenantsContext.Provider value={tenants}>
      {props.children}
    </TenantsContext.Provider>
  );
};

export default TenantsProvider;
