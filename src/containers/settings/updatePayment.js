import React from 'react';

import { Text, TextInput, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './sett-styles';

const UpdatePayment = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={
                        <Image source={require('../../assets/favicon.jpg')} style={{width: 75, height: 75}} />
                    }
                    leftComponent={
                        <Icon
                        name="arrow-left"
                        type="feather"
                        color="#fff"
                        size={25}
                        iconStyle={{
                            paddingTop: 30,
                            paddingLeft: 10,
                            paddingBottom: 10,
                        }}
                        onPress={() => navigation.goBack()}
                        />
                    }
                    containerStyle={{
                        backgroundColor: "#09061C",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Explainer Content */}
                <ScrollView>
                    {/* Image View */}
                    <Image source={require('../../assets/rentCollection.png')} style={styles.img} />
                    {/* Explainer */}
                    <View>
                        <Text style={styles.title}>Why Collect Payments with Alula</Text>
                        <View style={styles.listView}>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Automated Record Keeping</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Unlimited Transactions</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Secure Payments via Dwolla</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Free for Landlords*</Text>
                            </View>
                            <Text style={{color: '#fff', marginTop: 20, textAlign: 'center'}}>* 1% transaction fee passed onto the tenant.</Text>
                        </View>
                    </View>

                    {/* Conintue Button */}
                    <TouchableOpacity style={styles.continueButton}>
                        <Text style={styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    );
}

export default UpdatePayment;