import React from 'react';
import { Alert, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

// Style Sheet
import styles from './prop-styles';

// What I need:
    // State
    //
    // Function that deletes property from server

const PropertyDetail = () => {

    const navigation = useNavigation();

    // Delete Alert Pop Up
    const deleteAlert = () => {
        Alert.alert(
            "Delete Property?",
            "Deleting this property will also delete its data from all reportings.",
            [
                { text: "Cancel", style: "cancel", onPress: () => console.log("Cancel Pressed") },
                { text: "Delete", style: "destructive", onPress: () => console.log("Delete Pressed") }
            ]
        );
    }

    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={{top: 0, left: 0, height: 100}}>
                <TouchableOpacity style={styles.backBtn}>
                    <Feather name='arrow-left' size={25} color='#fff' onPress={() => navigation.goBack()} />
                </TouchableOpacity>
                <View style={styles.sectionSpacing}>
                    <Text style={styles.propertyDetailTitle}>Property Address</Text>
                    <View style={{flexDirection: 'row', marginTop: 5}}>
                        <Feather name='map-pin' color='white' size={12} style={{marginRight: 5, marginTop: 1, color: '#ffffff90'}} />
                        <Text style={styles.propertyDetailSubText}>City, State, Zip</Text>
                    </View>
                </View>
            </View>

            <ScrollView style={{marginTop: 30}}>
                {/* Tenant Information */}
                <Text style={styles.sectionTitle}>Tenant Information</Text>
                <View style={{backgroundColor: '#ffffff20', borderRadius: 10, marginHorizontal: 30, marginTop: 10, padding: 10}}>
                    <Text style={styles.tenantName}>Tenant Name</Text>

                    {/* Lease Type */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='edit-3' color='#ffffff90' size={16} />
                            <Text style={styles.infoTitle}>Lease Type:</Text>
                        </View>
                        <Text style={styles.infoText}></Text>
                    </View>
                    
                    {/* Lease Period */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='clock' color='#ffffff90' size={16} />
                            <Text style={styles.infoTitle}>Lease Period:</Text>
                        </View>
                        <Text style={styles.infoText}></Text>
                    </View>

                    {/* Rental Rate */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='dollar-sign' color='#ffffff90' size={16} />
                            <Text style={styles.infoTitle}>Rental Rate:</Text>
                        </View>
                        <Text style={styles.infoText}></Text>
                    </View>

                    {/* Security Deposit */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='dollar-sign' color='#ffffff90' size={16} />
                            <Text style={styles.infoTitle}>Security Deposit:</Text>
                        </View>
                        <Text style={styles.infoText}></Text>
                    </View>
                    
                    {/* Rent Due */}
                    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between'}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Feather name='calendar' color='#ffffff90' size={16} />
                            <Text style={styles.infoTitle}>Rent Due:</Text>
                        </View>
                        <Text style={styles.infoText}></Text>
                    </View>
                </View>

                {/* Tenant Information */}
                <Text style={styles.sectionTitle}>Service Requests</Text>
                <View style={{marginHorizontal: 10}}>
                    <TouchableOpacity style={styles.serviceRequestsButton} onPress={() => navigation.navigate('ServiceRequests')}>
                        <View style={{flexDirection: 'row', alignSelf:'center'}}>
                            <Feather name='tool' color='#fff' size={20} style={{marginLeft: 10, alignSelf: 'center'}} />
                            <Text style={styles.serviceRequestsText}>Service Requests</Text>
                        </View>
                        <Feather name='arrow-right' color='#fff' size={20} style={{marginRight: 10, alignSelf: 'center'}} />
                    </TouchableOpacity>
                </View>

                {/* Remove Property Button */}
                <TouchableOpacity style={{backgroundColor: 'red', margin: 30, padding: 15, borderRadius: 10}} onPress={deleteAlert}>
                    <Text style={styles.removePropButtonText}>Delete Property</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default PropertyDetail;