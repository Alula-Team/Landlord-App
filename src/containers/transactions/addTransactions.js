import React from 'react';
import { Text, View, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './trans-styles';

const AddTransactions = () => {
    
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    centerComponent={{ 
                        text: 'Add Transaction', 
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
                    rightComponent={{
                        text: 'Save',
                        style: { 
                            color: '#fff', 
                            fontWeight: '600', 
                            fontSize: 18, 
                            marginTop: 35,
                            marginRight: 10
                        }
                    }}
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

export default AddTransactions;