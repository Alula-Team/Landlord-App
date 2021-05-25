import React, { useState, useEffect } from "react";
import PropertiesContext from "./src/containers/properties/PropertiesContext";
// Navigation
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/AuthStack";
import MainStack from "./src/routes/MainStack";

// Redux Stuff
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./src/redux/reducers";

// Firebase
import firebase from "firebase";
import firestore from "./src/firebase/firebase";
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const zeeProperties = firestore
      .collection("properties")
      .get.then((querySnapshot) => {
        querySnapshot.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });
    setProperties(zeeProperties);
  });

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
    <NavigationContainer>
      <PropertiesContext.Provider value={{ properties }}>
        {signedIn ? <MainStack /> : <AuthStack />}
      </PropertiesContext.Provider>
    </NavigationContainer>
  );
}
