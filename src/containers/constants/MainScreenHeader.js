import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Header, Icon } from "react-native-elements";
import { mainStyles } from './styles';

const MainScreenHeader = ({ title = "Add...", actionIcon, badge, onAction, onAdd }) => {
  return (
    <Header
      placement={"left"}
      centerComponent={{
        text: title,
        style: mainStyles.centerText
      }}
      rightComponent={
        <View style={{ flexDirection: "row" }}>
          {/* Dashboard */}
          <Icon
            name={actionIcon}
            type="feather"
            color="#34383D80"
            size={25}
            iconStyle={mainStyles.actionIcon}
            onPress={onAction}
          // onPress={() => setShouldShow(!shouldShow)}
          />
          {/* ADD Transaction */}
          <Icon
            name="plus"
            type="feather"
            color="#34383D80"
            size={25}
            iconStyle={mainStyles.addIcon}
            onPress={onAdd}
          // setSearch("");
          // navigation.navigate("AddTransaction");
          />
        </View>
      }
      containerStyle={mainStyles.containerRedux}
    />
  );
};

export default MainScreenHeader;