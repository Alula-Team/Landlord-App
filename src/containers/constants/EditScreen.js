import * as React from "react";
import { View } from "react-native";
import EditScreenHeader from "./EditScreenHeader";
import { addStyles } from './styles';

const EditScreen = ({ title, onGoBack, onSubmit, children }) => {
  return (
    <View style={addStyles.container}>
      <EditScreenHeader title={title} onGoBack={onGoBack} onSubmit={onSubmit} />
      {children}
    </View>
  );
};

export default EditScreen;