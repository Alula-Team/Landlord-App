import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './src/routes/rootNavigation';

export default function App() {
  return (
      
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
        
  );
}
