import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';

// THINGS I NEED FOR THIS SCREEN
    // Working Search Feature
    // New properties auto sorted in alpha numeric order

const Properties = () => {

    const navigation = useNavigation();

    
    // Flatlist Dummy Data
    const data = [
        {
            id: 0,
            address: '5612 Harmony Ave',
            vacant: true,
        },
        {
            id: 1,
            address: '123 Main Street',
            vacant: true,
        },
        {
            id: 2,
            address: '595 S. Green Valley Pkwy Apt 121',
            vacant: true,
        },
        {
            id: 3,
            address: '561 Harrington Ct',
            vacant: false,
        },
        {
            id: 4,
            address: '1012 Horizon Ridge',
            vacant: false,
        },
        {
            id: 5,
            address: '595 Arville Court',
            vacant: false,
        },
        {
            id: 6,
            address: '101 University Dr. Unit 100',
            vacant: false,
        },
        {
            id: 7,
            address: '101 University Dr. Unit 300',
            vacant: false,
        },
        {
            id: 8,
            address: '101 University Dr. Unit 500',
            vacant: false,
        },
    ]

    function Occupied(props) {
        return <Text style={{color: '#5CB85C', fontWeight: '700'}}>Occupied</Text>
    }
    function Vacant(props) {
        return <Text style={{color: '#D9534F', fontWeight: '700'}}>Vacant</Text>
    }
    function Status(props) {
        const vacant = props.vacant;
        if (vacant) {
            return <Vacant />
        } else {
            return <Occupied />
        }
    }

    // Separator
    const renderSeparator = () => {
        return (
          <View
            style={{
              height: .5,
            //   width: '86%',
              backgroundColor: '#CED0CE50',
              marginLeft: '5%',
              marginRight: '5%'
            }}
          />
        );
      }
    
    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    placement={'left'}
                    centerComponent={{ 
                        text: 'Properties', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30
                        }
                    }}
                    rightComponent={
                        <>
                            <Icon
                                name='plus'
                                type='feather'
                                color='#fff'
                                size={25}
                                iconStyle={{
                                    paddingTop: 30,
                                    paddingRight: 20,
                                    paddingBottom: 10
                                }}
                                onPress={() => navigation.navigate('AddProperty')}
                            />
                        </>
                    }
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Feather name='search' color='#fff' size={20} style={styles.searchIcon} />
                    <TextInput 
                        type='search'
                        placeholder='Search Properties'
                        placeholderTextColor='#ffffff75'
                        style={styles.searchInput}
                        keyboardAppearance='dark'
                    />
                </View>

                {/* Service Requests */}
                <TouchableOpacity style={styles.serviceRequestsButton} onPress={() => navigation.navigate('ServiceRequests')}>
                    <View style={{flexDirection: 'row', alignSelf:'center'}}>
                        <Badge 
                            status='error'
                            value='New'
                            badgeStyle={{
                                borderWidth: 'none',
                                height: 22.5,
                                width: 35,
                            }}
                            containerStyle={{
                                marginLeft: 10
                            }}
                            textStyle={{
                                fontSize: 12,
                                fontWeight: '600'
                            }}
                        />
                        <Text style={styles.serviceRequestsText}>Service Requests</Text>
                    </View>
                    <Feather name='arrow-right' color='#fff' size={20} style={{marginRight: 10, alignSelf: 'center'}} />
                </TouchableOpacity>

                {/* Properties Flat List */}
                <SafeAreaView>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.address}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={styles.listCell} onPress={() => navigation.navigate('PropertyDetail')}>
                                <View style={{flexDirection: 'row'}}>
                                    <Feather name='map-pin' color='#fff' size={20} />
                                    <View>
                                        <Text style={styles.listItem}>{item.address}</Text>
                                        <Text style={styles.status}>Status: <Status vacant={item.vacant} /></Text>
                                    </View>
                                </View>
                                <Feather name='arrow-right' color='#fff' size={20} style={styles.arrow} />
                            </TouchableOpacity>
                        )}
                        contentContainerStyle={{ paddingBottom: 350 }}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={renderSeparator}
                    />
                </SafeAreaView>
            </View>
        </>
    );
}

export default Properties;