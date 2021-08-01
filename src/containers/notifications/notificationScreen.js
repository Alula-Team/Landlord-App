import React, { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
} from "react-native";
import { Badge, Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./notif-styles";

// import { notificationCreated } from "../../../functions";

// Things I need:
// Flatlist for Service Requests & Notifications
// Needs to hide badge when refreshed.

const Notifications = () => {
  const [refreshing, setRefreshing] = useState(false);

  // Flatlist Dummy Data
  const data = [
    {
      id: 0,
      title: "Payment Received",
      address: "5612 Harmony Ave",
      unit: "",
      date: "June 26, 2021",
    },
    {
      id: 1,
      title: "Past Due Balance",
      address: "595 S. Green Valley Pkwy",
      unit: "Unit 121",
      date: "June 1, 2021",
    },
  ];

  // Separator
  const renderSeparator = () => {
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />;
  };

  // Empty List Content
  const EmptyListMessage = () => {
    return (
      <View style={styles.emptyList}>
        <Image
          source={require("../../assets/transEmptyList.png")}
          style={styles.img}
        />
        <Text
          style={{
            color: "#34383D80",
            marginHorizontal: 35,
            alignSelf: "center",
            fontSize: 18,
            fontWeight: '600'
          }}
        >
          Hmm... No notifications yet
        </Text>
      </View>
    );
  };

  // onRefresh
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
  }, [refreshing]);

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        {/* <Header
          placement={"left"}
          centerComponent={{
            text: "Notifications",
            style: {
              color: "#fff",
              fontWeight: "700",
              fontSize: 25,
              paddingTop: 20,
              paddingBottom: 7,
            },
          }}
          containerStyle={{
            backgroundColor: "#232256",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        /> */}

        <Header
          placement={"left"}
          centerComponent={{
            text: "Notifications",
            style: {
              color: "#fff",
              fontWeight: "700",
              fontSize: 25,
              paddingTop: 20,
              paddingBottom: 7,
            },
          }}
          rightComponent={
            <>
              <View>
                {/* ADD Tenant */}
                <Icon
                  name="plus"
                  type="feather"
                  color="#fff"
                  size={25}
                  iconStyle={{
                    paddingTop: 20,
                    paddingRight: 20,
                    paddingBottom: 10,
                  }}
                  onPress={() => console.log("Yer trynna notify something")}
                />
              </View>
            </>
          }
          containerStyle={{
            backgroundColor: "#232256",
            justifyContent: "space-around",
            borderBottomWidth: 0,
          }}
        />

        {/* Flatlist */}
        <SafeAreaView>
          <FlatList
            data={data}
            keyExtractor={(item) => item.address}
            renderItem={({ item }) => (
              <View style={styles.notificationContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {/* Notification Badge */}
                  <Badge
                    status={"error"}
                    containerStyle={{ marginRight: 25 }}
                  />

                  {/* Cell Content */}
                  <View>
                    <Text style={styles.notificationTitle}>{item.title}</Text>

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="map-pin" color="#34383D80" size={15} />
                      <Text style={styles.notificationText}>
                        {item.address}
                      </Text>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="clock" color="#34383D80" size={15} />
                      <Text style={styles.notificationText}>{item.date}</Text>
                    </View>
                  </View>
                </View>
              </View>
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            contentContainerStyle={{ paddingBottom: 350 }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={renderSeparator}
          />
        </SafeAreaView>
      </View>
    </>
  );
};

export default Notifications;
