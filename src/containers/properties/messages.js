import React, { useState, version } from "react";
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl
} from "react-native";
import { Badge, Header, Icon } from "react-native-elements";

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
      tenant: "Joseph Smith",
      address: "108 Verygold Lane",
      unit: "A",
      date: "June 26, 2021",
      status: "Outstanding",
    },
    {
      id: 1,
      tenant: "John Apple-Seed",
      address: "123 Gogurt Villagessss",
      unit: "44C",
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
              text: 'Messages', 
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
            <TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate("MessageDetail")}>
              <View style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                <View>
                  {/* Title */}
                  <Text style={styles.notificationTitle}>{item.tenant}</Text>

                  {/* Address */}
                  <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Feather name="map-pin" color="#34383D80" size={15} />
                    <Text style={styles.notificationText}>
                      {item.address} {item.unit}
                    </Text>
                  </View>
                </View>

                {/* Chat Icon */}
                <Feather name="message-circle" size={20} color='#34383D90' style={{marginRight: 10}} />
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
