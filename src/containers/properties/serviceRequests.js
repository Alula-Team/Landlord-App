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
            isCompleted: false, 
        },
    ]

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
                    backgroundColor: '#09061C',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0
                }}
            />

            {/* Service Request Flat List */}
            <SafeAreaView>
                <View style={styles.listView, {marginTop: 20}}>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.address}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.listCell} onPress={() => navigation.navigate('ServiceRequestDetail')}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={styles.listItem}>{item.title}</Text>
                                </View>
                                <Feather name='arrow-right' color='#fff' size={20} style={styles.arrow} />
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={{ paddingBottom: 350 }}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </SafeAreaView>
        </View>
    );
}

export default ServiceRequests;
