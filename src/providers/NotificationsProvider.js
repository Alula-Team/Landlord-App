import React, { useState, useEffect, createContext } from "react";
import { db } from "../firebase/firebase";
import { collectIdsAndData } from "../utilities";

export const NotificationsContext = createContext();

const NotificationsProvider = (props) => {
  const [notifications, setNotifications] = useState([]);

  let unsubscribeFromFirestore = null;

  useEffect(() => {
    let mounted = true;
    async function getNotifications() {
      unsubscribeFromFirestore = await db
        .collection("notifications")
        .onSnapshot((snapshot) => {
          const notifications = snapshot.docs.map(collectIdsAndData);
          if (mounted) setNotifications(notifications);
        });
    }
    getNotifications();
    return function cleanup() {
      unsubscribeFromFirestore();
      mounted = false;
    };
  }, []);

  return (
    <NotificationsContext.Provider value={notifications}>
      {props.children}
    </NotificationsContext.Provider>
  );
};

export default NotificationsProvider;
