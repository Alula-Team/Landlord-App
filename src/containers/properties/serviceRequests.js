import React from 'react'
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';

// Things I need
    // 


const ServiceRequests = () => {

    const navigation = useNavigation();

    // Flatlist Dummy Data
    const data = [
        {
            id: 0,
            title: 'Leaking Faucet',
            address: '5612 Harmony Ave',
            unit: '',
            date: 'June 26, 2021',
            status: 'Outstanding', 
        },
        {
            id: 1,
            title: 'Air Conditioning',
            address: '595 S. Green Valley Pkwy',
            unit: 'Unit 121',
            date: 'June 1, 2021',
            status: 'Complete', 
        },
    ]

    // Separator
  const renderSeparator = () => {
    return (
      <View style={{ height: 0.5, backgroundColor: "#CED0CE" }} />
    );
  };

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header 
                centerComponent={{ 
                    text: 'Service Requests', 
                    style: { 
                        color: '#fff', 
                        fontWeight: 'bold', 
                        fontSize: 22, 
                        paddingTop: 30
                    }
                }}
                leftComponent={
                    <Icon 
                        name='arrow-left'
                        type='feather'
                        color='#fff'
                        size={25}
                        iconStyle={{
                            paddingTop: 30,
                            paddingLeft: 10,
                            paddingBottom: 10
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                containerStyle={{
                    backgroundColor: '#232256',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0
                }}
            />

            {/* Service Request Flat List */}
            <SafeAreaView>
                <View style={styles.listView}>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.address}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.notificationContainer} onPress={() => navigation.navigate('ServiceRequestDetail')}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View>
                                        <Text style={styles.notificationTitle}>{item.title}</Text>
                                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                                            <Feather name="map-pin" color="#34383D80" size={15} />
                                            <Text style={styles.notificationText}>{item.address} {item.unit}</Text>
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
                                    <Feather name="arrow-right" color="#34383D90" size={20} style={styles.arrow} />
                                </View>

                            </TouchableOpacity>
                        )}
                        contentContainerStyle={{ paddingBottom: 350 }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

export default ServiceRequests;
