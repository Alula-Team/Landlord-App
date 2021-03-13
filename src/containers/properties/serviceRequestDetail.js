import React from 'react';

import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon, Image } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// Style Sheet
import styles from './prop-styles';

// What I need:
    // State
    // Function that changes button when marked complete

const ServiceRequestDetail = () => {

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            {/* Header */}
            <Header 
                centerComponent={{ 
                    text: 'Service Request', 
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
                    backgroundColor: 'transparent',
                    justifyContent: 'space-around',
                    borderBottomWidth: 0
                }}
            />

            <ScrollView>
                {/* Content*/}
                <View style={styles.sectionSpacing}>
                    {/* Property Address */}
                    <Text style={styles.propertyDetailTitle}>595 S. Green Valley Pkwy Apt 121</Text>

                    {/* Request Type */}
                    <Text style={{fontSize: 18, fontWeight: '600', color: '#fff', marginTop: 20}}>Request Type</Text>

                    {/* Description */}
                    <Text style={{fontSize: 16, color: '#fff', marginTop: 20}}>Description</Text>

                    {/* Button */}
                    <TouchableOpacity style={styles.markComplete}>
                        <Text style={styles.buttonText}>Mark Complete</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}

export default ServiceRequestDetail;