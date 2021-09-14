import * as React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AddScreenHeader from "./AddScreenHeader";
import addStyles from './styles';

const AddScreen = ({ title = "Add...", onGoBack, onSubmit, children }) => {
  return (
    <View style={addStyles.container}>
      <AddScreenHeader title={title} onGoBack={onGoBack} onSubmit={onSubmit} />
      <KeyboardAwareScrollView>
        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default AddScreen;