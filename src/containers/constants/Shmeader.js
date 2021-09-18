import React from "react";
import { Header, View, Icon, Badge, Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { mainStyles } from './styles';

const Shmeader = () => {
  return (
    <Header
      placement={"left"}
      centerComponent={{
        text: "Properties",
        style: {
          color: "#34383D",
          fontWeight: "bold",
          fontSize: 25,
          paddingTop: 20,
        },
      }}
      rightComponent={
        <View style={{ flexDirection: "row" }}>
          {/* Dashboard */}
          <Icon
            name="activity"
            type="feather"
            color="#34383D80"
            size={25}
            iconStyle={{
              paddingTop: 20,
              paddingRight: 20,
              paddingBottom: 10,
            }}
            onPress={() => setShouldShow(!shouldShow)}
          />
          {/* ADD Transaction */}
          <Icon
            name="plus"
            type="feather"
            color="#34383D80"
            size={25}
            iconStyle={{
              paddingTop: 20,
              paddingRight: 20,
              paddingBottom: 10,
            }}
            onPress={() => {
              setSearch("");
              navigation.navigate("AddTransaction");
            }}
          />
        </View>
      }
    />
  );
};

export default Shmeader;
