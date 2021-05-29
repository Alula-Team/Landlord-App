import React, { useState, useEffect } from "react";
import PropertiesContext from "./src/containers/properties/PropertiesContext";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/AuthStack";
import MainStack from "./src/routes/MainStack";
// Firebase
import firebase from "firebase";
import firestore from "./src/firebase/firebase";
// Redux
import rootReducer from "./src/redux/reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [properties, setProperties] = useState([]);

  let unsubscribe = null;
  useEffect(() => {
    let mounted = true;
    async function getStuffs() {
      unsubscribe = firestore
        .collections("properties")
        .onSnapshot((snapshot) => {
          const properties = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });
          if (mounted) setProperties(properties);
        });
    }
    getStuffs();
    return function cleanUp() {
      unsubscribe();
      mounted = false;
    };
  }, []);

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
    <Provider store={store}>
      <NavigationContainer>
        {signedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </Provider>
  );
}
