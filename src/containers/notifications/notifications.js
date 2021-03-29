import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './notif-styles';


// Things I need:
// Header
    // Title
    // Stepper

// Flatlist for Service Requests & Notifications
    // Needs a sort feature where the newest requests are at the top


const Dashboard = () => {

    const navigation = useNavigation();

    // Flatlist Dummy Data
    // const data = [
    //     {
            
    //     },
        
    // ]

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
                        text: 'Notifications', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30
                        }
                    }}
                    // rightComponent={
                    //     <>
                    //     <Icon 
                    //         name='bell'
                    //         type='feather'
                    //         color='#fff'
                    //         size={25}
                    //         iconStyle={{
                    //             paddingTop: 30,
                    //             paddingRight: 20,
                    //             paddingBottom: 10
                    //         }}
                    //         onPress={() => navigation.navigate('Notifications')}
                    //     />
                    //     <Badge 
                    //         status="error" 
                    //         containerStyle={{ 
                    //             position: 'absolute', 
                    //             top: 30, 
                    //             right: 23.5,
                    //         }}
                    //         badgeStyle={{
                    //             borderWidth: 'none'
                    //         }}
                    //     />
                    //     </>
                    // }
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* Service Request Flat List */}
                <SafeAreaView>
                    <View style={styles.listView}>
                        <FlatList
                            // data={data}
                            keyExtractor={item => item.address}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={styles.listCell}>
                                    
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

export default Dashboard;