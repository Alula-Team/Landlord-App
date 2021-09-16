import * as React from "react";
import { Header, View, Icon, Badge } from "react-native-elements";
import { mainStyles } from './styles';

const MainScreenHeader = ({ title = "Add...", actionIcon = null, badge = null, onAction = null, onAdd = null }) => {
  return (
    <Header
      placement={"left"}
      centerComponent={{
        text: title,
        style: mainStyles.centerText
      }}
      rightComponent={
        <>
          <View style={{ flexDirection: "row" }}>
            {/* SERVICE REQUESTS */}
            {onAction === null ? "" :
              <View>
                <Icon
                  name={actionIcon}
                  type="feather"
                  color="#34383D80"
                  size={25}
                  iconStyle={mainStyles.actionIcon}
                  onPress={onAction}
                />
                <Badge
                  status="error"
                  containerStyle={mainStyles.badgeContainer}
                  badgeStyle={mainStyles.badge}
                />
              </View>
            }

            {/* ADD Something */}
            {onAdd === null ? "" :
              <Icon
                name="plus"
                type="feather"
                color="#34383D80"
                size={25}
                iconStyle={mainStyles.addIcon}
                onPress={onAdd}
              />
            }
          </View>
        </>
      }
      containerStyle={mainStyles.containerRedux}
    />
  );
};

export default MainScreenHeader;