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
    // New tenants auto sorted by first name

const Tenants = () => {

    const navigation = useNavigation();

    const data = [
        {
            id: 0,
            tenant: 'Kane Toomer',
            address: '5612 Harmony Ave',
            archived: true,
        },
        {
            id: 1,
            tenant: 'Jaida Nash',
            address: '123 Main Street',
            archived: true,
        },
        {
            id: 2,
            tenant: 'Xochitl Gonzales-Lopez',
            address: '595 S. Green Valley Pkwy Apt 121',
            archived: true,
        },
        {
            id: 3,
            tenant: 'John Smith',
            address: '561 Harrington Ct',
            archived: false,
        },
        {
            id: 4,
            tenant: 'Jane Doe',
            address: '1012 Horizon Ridge',
            archived: false,
        },
    ]

    function Active(props) {
        return <Text style={{color: '#5CB85C', fontWeight: '700'}}>Active</Text>
    }
    function Archived(props) {
        return <Text style={{color: '#D9534F', fontWeight: '700'}}>Archived</Text>
    }
    function Status(props) {
        const archived = props.archived;
        if (archived) {
            return <Archived />
        } else {
            return <Active />
        }
    }

    // Separator
    const renderSeparator = () => {
        return (
          <View style={{ height: .5, backgroundColor: '#CED0CE50'}} />
        );
      }

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
                            data={data}
                            keyExtractor={item => item.address}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.listCell} onPress={() => navigation.navigate('TenantDetail')}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Feather name='user' color='#fff' size={20} />
                                        <View>
                                            <Text style={styles.listItem}>{item.tenant}</Text>
                                            <Text style={styles.status}>Status: <Status archived={item.archived} /></Text>
                                        </View>
                                    </View>
                                    <Feather name='arrow-right' color='#fff' size={20} style={styles.arrow} />
                                </TouchableOpacity>
                            )}
                            contentContainerStyle={{ paddingBottom: 350 }}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={renderSeparator}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

export default Tenants;