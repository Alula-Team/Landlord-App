import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './trans-styles';

const TransactionDetail = () => {
    
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    centerComponent={{ 
                        text: 'Transaction Detail', 
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
                    rightComponent={
                        <Icon 
                            name='more-horizontal'
                            type='feather'
                            color='#fff'
                            size={25}
                            iconStyle={{
                                paddingTop: 30,
                                paddingRight: 10,
                                paddingBottom: 10
                            }}
                            // onPress={() => navigation.goBack()}
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

export default TransactionDetail
