import * as React from "react";
import { View } from "react-native";
import { addStyles } from './styles';
import DetailScreenHeader from "./DetailScreenHeader";

const DetailScreen = ({ title, onGoBack, onPress, children }) => {
  return (
    <View style={addStyles.container}>
      <DetailScreenHeader title={title} onGoBack={onGoBack} onPress={onPress} />
      {children}
    </View>
  );
};

export default DetailScreen;