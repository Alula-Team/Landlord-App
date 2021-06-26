import React, { useState, useEffect, createContext } from "react";
import { auth, getUserDocument } from "../firebase/firebase";

export const UserContext = createContext({ user: null });

const UserProvider = (props) => {
  const [user, setUser] = useState(null);
  const unsubscribeFromAuth = null;
  useEffect(() => {
    let mounted = true;

    async function getAuths() {
      unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
        const user = await getUserDocument(userAuth);
        console.log(user);
        setUser(user);
      });
    }
    getAuths();
    return function cleanup() {
      unsubscribeFromAuth();
      mounted = false;
    };
  }, []);

  return (
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
};

export default UserProvider;
