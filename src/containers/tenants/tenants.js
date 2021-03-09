import React from 'react';
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './tenant-styles';

// THINGS I NEED FOR THIS SCREEN
    // Working Search Feature
    // New tenants auto sorted by last name

const Tenants = () => {
    const navigation = useNavigation();

    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    placement={'left'}
                    centerComponent={{ 
                        text: 'Tenants', 
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
                                onPress={() => navigation.navigate('AddTenants')}
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
                        placeholder='Search Tenants'
                        placeholderTextColor='#ffffff75'
                        style={styles.searchInput}
                        keyboardAppearance='dark'
                    />
                </View>

                {/* Properties Flat List */}
                <SafeAreaView>
                    <View style={styles.listView}>
                        <FlatList
                            // data={data}
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
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

export default Tenants;