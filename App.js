import React, { useState, useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/AuthStack";
import MainStack from "./src/routes/MainStack";

// Redux Stuff
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/store/reducers";

import PropertiesProvider from "./src/providers/PropertiesProvider";
import TenantsProvider from "./src/providers/TenantsProvider";
import TransactionsProvider from "./src/providers/TransactionsProvider";
import NotificationsProvider from "./src/providers/NotificationsProvider";
import UserProvider from "./src/providers/UserProvider";

// Firebase
import firebase from "firebase";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    checkSignedIn();
  }, []);

  checkSignedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setSignedIn(true);
      } else {
        setSignedIn(false);
      }
    });
  };
  return (
    <SafeAreaProvider>
      <PropertiesProvider>
        <TenantsProvider>
          <TransactionsProvider>
            <NotificationsProvider>
              <NavigationContainer>
                {signedIn ? <MainStack /> : <AuthStack />}
              </NavigationContainer>
            </NotificationsProvider>
          </TransactionsProvider>
        </TenantsProvider>
      </PropertiesProvider>
    </SafeAreaProvider>
  );
}
