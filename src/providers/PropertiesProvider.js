import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase";
import { collectIdsAndData } from "../utilities";

export const PropertiesContext = createContext();

export const PropertyContext = createContext();

const getTenantAddress = (tenant) => {
  let theProperty = properties.filter((item) => item.id === tenant.property);
  let thePaddedTenant = { ...tenant, property: { ...theProperty } };
  return thePaddedTenant;
};

export const withProperty = (Component) => (props) => {
  let property;
  db.collection("properties")
    .doc(props.property)
    .get()
    .then((doc) => (property = { propertyInfo: { ...doc.data() } }));

  return (
    <PropertyContext.Consumer>
      {(property) => <Component {...props} property={property} />}
    </PropertyContext.Consumer>
  );
};

export const useProperty = ({ Component, propertyID }) => {
  const [property, setProperty] = useState({});

  useEffect(() => {
    async function getProperty() {
      try {
        await db
          .collection("properties")
          .doc(propertyID)
          .get()
          .then((doc) => setProperty(...doc.data()));
      } catch {
        (error) => console.error(error);
      }
    }
    getProperty();
  }, []);

  return <Component property={property} />;
};

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
