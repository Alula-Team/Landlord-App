import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { Badge, Header } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './notif-styles';


// Things I need:
    // Flatlist for Service Requests & Notifications
        // Needs a sort feature where the newest requests are at the top


const Dashboard = () => {

    // Separator
    const renderSeparator = () => {
        return (
        <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />
        );
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
                color: "#fff",
                marginHorizontal: 35,
                alignSelf: "center",
                fontSize: 18,
              }}
            >
              Hmm... No transactions yet
            </Text>
          </View>
        );
      };
    
    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header placement={'left'}
                    centerComponent={{ 
                        text: 'Notifications', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 20,
                            paddingBottom: 7
                        }
                    }}
                    containerStyle={{
                        backgroundColor: '#232256',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* ***** Flatlist Layout ***** */}
                <TouchableOpacity style={styles.notificationContainer}>
                    <Text style={styles.notificationTitle}>Notification Title</Text>
                    
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="map-pin" color="#34383D80" size={15} />
                      <Text style={styles.notificationText}>Address</Text>
                    </View>
                    
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Feather name="clock" color="#34383D80" size={15} />
                      <Text style={styles.notificationText}>Date</Text>
                    </View>
                </TouchableOpacity>

                {/* Flatlist */}
                <SafeAreaView>
                    <FlatList 
                        // SAME STYLING AS TRANSACTIONS FLATLIST
                    />
                </SafeAreaView>
            
            </View>
        </>
    );
}

export default Dashboard;