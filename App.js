import React, { useState } from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/routes/AuthStack";
import MainStack from "./src/routes/MainStack";

// Redux Stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers";

// Firebase
import { auth } from './src/firebase/firebase';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {

  const [signedIn, setSignedIn] = useState(false);

    auth.onAuthStateChanged((user) => {
        if (user) {
          setSignedIn(true);
        } else {
          setSignedIn(false);
        }
    });

  return (
    <Provider store={store}>
      <NavigationContainer>
        {signedIn
            ? (
              <AuthStack />
            ) : (
              <MainStack />
            )
        }
      </NavigationContainer>
    </Provider>
  );
}