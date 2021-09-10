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
import styles from "./styles";

// Things I need:
// Flatlist for Service Requests & Notifications
// Needs to hide badge when refreshed.

// Types of notifications
  // Payment Received
  // Past Due Balance
  // Lease Expiration: 90d
  // Lease Expiration: 60d
  // Lease Expiration: 30d

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

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
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE", width: '90%', alignSelf: 'center' }} />;
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
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <View style={styles.container}>
        {/* Header */}
        <Header
          placement={"left"}
          centerComponent={{
            text: "Notifications",
            style: {
              color: "#34383D",
              fontWeight: "700",
              fontSize: 25,
              paddingTop: 20,
              paddingBottom: 7,
            },
          }}
          containerStyle={{
            backgroundColor: "#fff",
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
                    containerStyle={{ marginRight: 25, border: "none" }}
                    badgeStyle={{ borderWidth: 0 }}
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
