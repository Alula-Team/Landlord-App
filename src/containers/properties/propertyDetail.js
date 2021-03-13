import React from 'react';

import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// Style Sheet
import styles from './prop-styles';

// What I need:
    // State
    // Function that changes select button to tenant cell when tenant is selected

const PropertyDetail = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {/* Header */}
            <Header 
                centerComponent={{ 
                    text: 'Details', 
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
                            marginRight: 20,
                            marginTop: 30
                        }}

                        // Will pop modal to with options to edit property or delete property
                        // onPress={() => }
                    />
                }
                containerStyle={{
                    backgroundColor: 'transparent',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0
                }}
            />

            <ScrollView>
                {/* Property Information */}
                <View style={styles.sectionSpacing}>
                    <Text style={styles.propertyDetailTitle}>595 S. Green Valley Pkwy Apt 121</Text>
                    <View style={{flexDirection: 'row', marginTop: 5, marginBottom: 30}}>
                        <Feather name='map-pin' color='white' size={15} style={{marginRight: 5, marginTop: 1, color: '#ffffff90'}} />
                        <Text style={styles.propertyDetailSubText}>Las Vegas, NV, 89107</Text>
                    </View>
                </View>
                
                {/* Tenant Information */}
                <View style={{marginHorizontal: 10}}>
                    <Text style={styles.sectionText}>Tenant</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Select Tenant</Text>
                        <Feather name='arrow-right' color='#fff' size={20} style={{marginRight: 10, alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                {/* Service Request History */}
                <View style={{marginHorizontal: 10}}>
                    <Text style={styles.sectionText}>Service History</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>View Service History</Text>
                        <Feather name='arrow-right' color='#fff' size={20} style={{marginRight: 10, alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                {/* Button */}
                <TouchableOpacity style={styles.deleteProperty}>
                        <Text style={styles.buttonText}>Delete Property</Text>
                    </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default PropertyDetail;