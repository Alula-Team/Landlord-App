import * as React from "react";
import { Header, View, Icon, Badge } from "react-native-elements";
import { mainStyles } from './styles';

const MainScreenHeader = ({ title = "Adddddd...", actionIcon = null, badge = null, onAction = null, onAdd = null }) => {
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
        <>
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
        </>
      }
      containerStyle={{
        backgroundColor: "#fff",
        justifyContent: "space-around",
        borderBottomWidth: 0,
      }}
    />
  );
};

export default MainScreenHeader;