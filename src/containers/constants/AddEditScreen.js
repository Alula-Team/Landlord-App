import * as React from "react";
import { View } from "react-native";
import AddEditScreenHeader from "./AddEditScreenHeader";
import { addStyles } from './styles';

const AddEditScreen = ({ title, onGoBack, onSubmit, children }) => {
  return (
    <View style={addStyles.container}>
      <AddEditScreenHeader title={title} onGoBack={onGoBack} onSubmit={onSubmit} />
      {children}
    </View>
  );
};

export default AddEditScreen;