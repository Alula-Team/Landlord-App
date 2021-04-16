import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./src/routes/rootNavigation";
import Routes from "./src/routes/routes";

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
        {/* <RootNavigation /> */}
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}
