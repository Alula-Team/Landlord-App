import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase/firebase";
import { collectIdsAndData } from "../utilities";

export const PropertiesContext = createContext();

export const withProperty = (Component) => (props) => <Component {...props} />;

const PropertiesProvider = (props) => {
  const [properties, setProperties] = useState([]);

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    async function getProperties() {
      unsubscribeFromFirestore = await db
        .collection("properties")
        .orderBy("address", "asc")
        .orderBy("unit", "asc")
        .onSnapshot((snapshot) => {
          const properties = snapshot.docs.map(collectIdsAndData);
          if (mounted) setProperties(properties);
        });
    }
    getProperties();

    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    };
  }, []);

  return (
    <PropertiesContext.Provider value={properties}>
      {props.children}
    </PropertiesContext.Provider>
  );
};

export default PropertiesProvider;
