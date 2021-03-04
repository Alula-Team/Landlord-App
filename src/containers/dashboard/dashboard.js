import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './dash-styles';


// Things I need:
// Header
    // Title
    // Notifications Button
// Box for Net gains
// Flatlist for Service Requests
    // Needs a sort feature where the newest requests are at the top


const Dashboard = () => {

    const navigation = useNavigation();

    // Flatlist Dummy Data
    const data = [
        {
            id: 0,
            address: '5612 Harmony Ave',
            isCompleted: false, 
        },
        {
            id: 1,
            address: '123 Main Street',
            isCompleted: false,
        },
        {
            id: 2,
            address: '595 S. Green Valley Pkwy Apt 121',
            isCompleted: false,
        },
        {
            id: 3,
            address: '561 Harrington Ct',
            isCompleted: false,
        },
        {
            id: 4,
            address: '1012 Horizon Ridge',
            isCompleted: true,
        },
        {
            id: 5,
            address: '595 Arville Court',
            isCompleted: true,
        },
        {
            id: 6,
            address: '101 University Dr. Unit 100',
            isCompleted: true,
        },
        {
            id: 7,
            address: '101 University Dr. Unit 300',
            isCompleted: true,
        },
        {
            id: 8,
            address: '101 University Dr. Unit 500',
            isCompleted: true,
        },
    ]

    // Badge Functions
    function NewBadge(props) {
        return(
            <View>
                <Feather name='alert-circle' color='#f0ad4e' size={23} />
            </View>
        );
    }
    function CompletedBadge(props) {
        return(
            <View>
                <Feather name='check-circle' color='#5cb85c' size={23} />
            </View>
        );
    }
    function CellBadge(props) {
        const isCompleted = props.isCompleted;
        if (isCompleted) {
            return <CompletedBadge />
        } else {
            return <NewBadge />
        }
    }
    

    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header placement={'left'}
                    centerComponent={{ 
                        text: 'Dashboard', 
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
                            name='bell'
                            type='feather'
                            color='#fff'
                            size={25}
                            iconStyle={{
                                paddingTop: 30,
                                paddingRight: 20,
                                paddingBottom: 10
                            }}
                            onPress={() => navigation.navigate('Notifications')}
                        />
                        <Badge 
                            status="error" 
                            containerStyle={{ 
                                position: 'absolute', 
                                top: 30, 
                                right: 23.5,
                            }}
                            badgeStyle={{
                                borderWidth: 'none'
                            }}
                        />
                        </>
                    }
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* Net Gains Box */}
                <View style={styles.netGainsCell}>
                    <Text style={styles.netGainsCellTitle}>Net Revenue</Text>
                    <Text style={styles.netGainsCellNumber}>$500,000 </Text>
                    <Text style={styles.netGainsCellSubTitle}>Year to Date</Text>
                </View>

                {/* Service Request Flat List */}
                <SafeAreaView>
                    <Text style={styles.flatlistTitle}>Service Requests</Text>
                    <View style={styles.listView}>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.address}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.listCell}>
                                    <View style={{flexDirection: 'row'}}>
                                        <CellBadge isCompleted={item.isCompleted} />
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

export default Dashboard;