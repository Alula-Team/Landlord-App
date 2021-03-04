import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import styles from './dash-styles';


// Things I need:
// Header
    // Title
    // Back Button
// Flatlist for Notifications
const Notifications = () => {

    const navigation = useNavigation();
   
    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    centerComponent={{ 
                        text: 'Notifications', 
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
            </View>
        </>
    );
}

export default Notifications;