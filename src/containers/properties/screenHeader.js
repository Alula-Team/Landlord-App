import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import { Header, Icon } from "react-native-elements";
const ScreenHeader = ({ onSubmit }) => {
  return (
    <Header
      centerComponent={{
        text: "Add Property",
        style: {
          color: "#fff",
          fontWeight: "700",
          fontSize: 20,
          paddingTop: 20,
        },
      }}
      leftComponent={
        <Icon
          name="arrow-left"
          type="feather"
          color="#fff"
          size={25}
          iconStyle={{
            paddingTop: 20,
            paddingLeft: 10,
            paddingBottom: 10,
          }}
          onPress={() => navigation.goBack()}
        />
      }
      rightComponent={
        <TouchableOpacity
          style={{ paddingTop: 22.5, paddingRight: 10 }}
          onPress={onSubmit}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>
            Save
          </Text>
        </TouchableOpacity>
      }
      containerStyle={{
        backgroundColor: "#232256",
        justifyContent: "space-around",
        borderBottomWidth: 0,
      }}
    />
  );
};

export default ScreenHeader;
