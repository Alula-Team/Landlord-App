import React from 'react';
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';

// THINGS I NEED FOR THIS SCREEN
    // Working Search Feature
    // New properties auto sorted in alpha numeric order
    // Separation between vacant and occupied properties

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
                    />
                </View>

                {/* Properties Flat List */}
                <SafeAreaView>
                    <View style={styles.listView}>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.address}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.listCell}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Feather name='map-pin' color='#fff' size={20} />
                                        <Text style={styles.listItem}>{item.address}</Text>
                                    </View>
                                    <Feather name='arrow-right' color='#fff' size={20} style={styles.arrow} />
                                </TouchableOpacity>
                            )}
                            contentContainerStyle={{ paddingBottom: 350 }}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

export default Properties;