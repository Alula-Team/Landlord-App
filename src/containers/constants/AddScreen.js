import * as React from "react";
import { View } from "react-native";
import AddScreenHeader from "./AddScreenHeader";
import { addStyles } from './styles';

const AddScreen = ({ title, onGoBack, onSubmit, children }) => {
  return (
    <View style={addStyles.container}>
      <AddScreenHeader title={title} onGoBack={onGoBack} onSubmit={onSubmit} />
      {children}
    </View>
  );
};

export default AddScreen;