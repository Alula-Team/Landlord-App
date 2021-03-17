import React from 'react'
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './prop-styles';

// Things I need
    //Function to swap buttons when marked complete or unmarked complete

const ServiceRequestDetailScreen = () => {

    const navigation = useNavigation();

    // Button Function

    // function Buttons(props) {
        
    // }

    return (
        <>
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
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />
                
                {/* Content */}

                <ScrollView>
                    {/* Image */}
                    
                    
                    {/* Property Address */}
                    <View style={styles.propertySectionSpacing}>
                        <Text style={styles.propertyServiceTitle}>Property Address</Text>
                        <View style={{flexDirection: 'row', marginTop: 5}}>
                            <Feather name='map-pin' color='white' size={15} style={{marginRight: 5, marginTop: 1, color: '#ffffff90'}} />
                            <Text style={styles.propertyServiceSubText}>City, State, Zip</Text>
                        </View>
                    </View>

                    {/* Service Title */}
                    <View style={styles.propertySectionSpacing}>
                        <Text style={styles.propertyServiceTitle}>Service Request Title</Text>
                    </View>

                    {/* Description */}
                    <View style={styles.descriptionSectionSpacing}>
                        <Text style={{color: '#fff', fontSize: 15, fontWeight: '600', marginBottom: 12}}>Description:</Text>
                        <Text style={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
                    </View> 

                    {/* Buttons */}
                    

                </ScrollView>
            </View>
        </>
    );

}

export default ServiceRequestDetailScreen;