import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
import { addStyles } from './styles';

const AddEditScreenHeader = ({ title = "Add/Edit...", onGoBack, onSubmit = null }) => {
  return (
    <Header
      centerComponent={{
        text: title,
        style: addStyles.centerText
      }}
      leftComponent={
        <Icon
          name="arrow-left"
          type="feather"
          color="#34383d80"
          size={25}
          iconStyle={addStyles.leftIcon}
          onPress={onGoBack}
        />
      }
      rightComponent={
        onSubmit === null ? "" :
          <TouchableOpacity
            style={addStyles.touchableOpacity}
            onPress={onSubmit}
          >
            <Text style={addStyles.rightText}>
              Save
            </Text>
          </TouchableOpacity>
      }
      containerStyle={addStyles.containerRedux}
    />
  );
};

export default AddEditScreenHeader;