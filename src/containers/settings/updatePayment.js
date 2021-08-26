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
import styles from './styles';

const UpdatePayment = () => {

    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "Update Payment",
                        style: {
                        color: "#fff",
                        fontWeight: '700', 
                        fontSize: 20,
                        paddingTop: 20,
                        },
                    }}
                    leftComponent={
                        <Icon
                        name="arrow-left"
                        type="feather"
                        color="#fff"
                        size={25}
                        iconStyle={{
                            paddingTop: 20,
                            paddingLeft: 10,
                            paddingBottom: 10,
                        }}
                        onPress={() => navigation.goBack()}
                        />
                    }
                    containerStyle={{
                        backgroundColor: "#232256",
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
                                <Text style={styles.listText}>Automated Financial Reporting</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Unlimited Properties, Tenants & Transactions</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>Secure Payments via Dwolla</Text>
                            </View>
                            <View style={styles.listInline}>
                                <Feather name='check' size={25} color='#428bca' style={{marginRight: 10}} />
                                <Text style={styles.listText}>No Monthly Subscription*</Text>
                            </View>
                            <Text style={{color: '#34383D80', marginTop: 20, textAlign: 'center'}}>* 1% convenience fee passed onto tenant</Text>
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