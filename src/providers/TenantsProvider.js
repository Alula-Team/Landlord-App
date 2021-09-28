import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase";
import { collectIdsAndData } from "../utilities";
export const TenantsContext = createContext();
export const TenantContext = createContext();

export const TenantProvider = (props) => {
  const [tenant, setTenant] = useState();

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    async function getTenant() {
      unsubscribeFromFirestore = await db.collection('tenants').doc(props.id).onSnapshot((snapshot) => {
        const tenant = collectIdsAndData(snapshot.data);
        if (mounted) setTenant(tenant);
      });
    }
    getTenant();
    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    }
  }, []);

  return (
    <TenantContext.Provider value={tenant}>
      {props.children}
    </TenantContext.Provider>
  )
}

export const TenantsProvider = (props) => {
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