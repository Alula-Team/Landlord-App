import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/routes/rootNavigation';
import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
    <RootNavigation />
    {/* <Routes /> */}
    </NavigationContainer>
        
  );
}
