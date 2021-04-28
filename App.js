import React from "react";

// Navigation
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/routes/AppStack";

// Redux Stuff
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./src/redux/reducers";


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </Provider>
  );
}