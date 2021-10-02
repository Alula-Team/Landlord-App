import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';


const LoadingScreen = () => {
  const [indicator, setIndicator] = useState(false);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size="large" color="#232256" animating={indicator} hideActivityIndicator='true' />
    </View>
  );
}

export default LoadingScreen;