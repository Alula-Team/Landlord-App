import React, { useState, useEffect } from "react";
import {StyleSheet} from 'react-native';

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/AuthStack";
import MainStack from "./src/routes/MainStack";

// Redux Stuff
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers";

// Firebase
import firebase from 'firebase';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {

  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    checkSignedIn()
  }, [])

  checkSignedIn = () => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          setSignedIn(true);
        } else {
          setSignedIn(false);
        }
    });
  }
  return (
    <Provider store={store} style={styles.container}>
      <NavigationContainer>
        {signedIn
            ? (
              <MainStack />
            ) : (
              <AuthStack />
            )
        }
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    container: {
      height: '100%',
      backgroundColor: '#09061C'
  },
  }
})