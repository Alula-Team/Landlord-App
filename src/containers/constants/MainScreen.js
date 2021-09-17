import * as React from "react";
import { View } from "react-native";
import MainScreenHeader from "./AddScreenHeader";
import { mainStyles } from './styles';

const MainScreen = ({ title, actionIcon, badge, onAction, onAdd, children }) => {
  return (
    <View style={mainStyles.container}>
      <MainScreenHeader title={title} actionIcon={actionIcon} badge={badge} onAction={onAction} onAdd={onAdd} />
      {children}
    </View>
  );
};

export default MainScreen;