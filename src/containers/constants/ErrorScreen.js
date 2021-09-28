import React from 'react';
import { View, Text } from 'react-native';


const ErrorScreen = ({ error }) => (
  <View>
    <Text>Error: {error.message}</Text>
  </View>
)

export default ErrorScreen;