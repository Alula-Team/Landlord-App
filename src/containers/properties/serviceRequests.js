import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { Header, Icon } from "react-native-elements";

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

// Style Sheet
import styles from "./styles";

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const ServiceRequests = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);

  // Flatlist Dummy Data
  const data = [
    {
      id: 0,
      title: "Leaking Faucet",
      address: "5612 Harmony Ave",
      unit: "",
      date: "June 26, 2021",
      status: "Outstanding",
    },
    {
      id: 1,
      title: "Air Conditioning",
      address: "595 S. Green Valley Pkwy",
      unit: "Unit 121",
      date: "June 1, 2021",
      status: "Complete",
    },
  ];

  // onRefresh
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Separator
  const renderSeparator = () => {
    return <View style={{ height: 0.5, backgroundColor: "#CED0CE", width: '90%', alignSelf: 'center' }} />;
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header 
          centerComponent={{ 
              text: 'Service Requests', 
              style: { 
                  color: '#34383D', 
                  fontWeight: "600",
                  fontSize: 20, 
                  paddingTop: 20
              }
          }}
          leftComponent={
              <Icon 
                  name='arrow-left'
                  type='feather'
                  color='#34383D80'
                  size={25}
                  iconStyle={{
                      paddingTop: 20,
                      paddingLeft: 10,
                      paddingBottom: 10
                  }}
                  onPress={() => navigation.goBack()}
              />
          }
          containerStyle={{
              backgroundColor: '#fff',
              justifyContent: 'space-around',
              borderBottomWidth: 0
          }}
      />

      {/* Service Request Flat List */}
      <View style={styles.listView}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.address}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.notificationContainer}
              onPress={() => navigation.navigate("ServiceRequestDetail")}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text style={styles.notificationTitle}>{item.title}</Text>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Feather name="map-pin" color="#34383D80" size={15} />
                    <Text style={styles.notificationText}>
                      {item.address} {item.unit}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Feather name="clock" color="#34383D80" size={15} />
                    <Text style={styles.notificationText}>{item.date}</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Feather name="tool" color="#34383D80" size={15} />
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                </View>
                <Feather
                  name="arrow-right"
                  color="#34383D90"
                  size={20}
                  style={styles.arrow}
                />
              </View>
            </TouchableOpacity>
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{ paddingBottom: 350 }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
        />
      </View>
    </View>
  );
};

export default ServiceRequests;
