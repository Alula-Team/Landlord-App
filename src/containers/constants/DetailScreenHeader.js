import * as React from "react";
import { View, Header, Icon } from "react-native-elements";
import { addStyles } from './styles';

const DetailScreenHeader = ({ title = "Add...", onGoBack, onPress }) => {
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
        <Icon
          name="more-horizontal"
          type="feather"
          color="#34383D80"
          size={27.5}
          iconStyle={addStyles.rightIcon}
          onPress={onPress}
        />
      }
      containerStyle={addStyles.containerRedux}
    />
  );
};

export default DetailScreenHeader;