import React, { useState } from 'react';
import { Alert, Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './trans-styles';

// THINGS I NEED FOR THIS SCREEN
    // Working Search Feature
    // New transactions auto sorted by newest to oldest
    // Separation between months/year

const Transactions = () => {

    const navigation = useNavigation();

    // Flatlist Dummy Data
    const data = [
        {
            id: 0,
            address: '5612 Harmony Ave',
            amount: 1000,
            payment: true,
            date: "03/03/21",
            transactionType: 'Rent Payment',
            paymentType: 'Auto Payment Collection',
            notes: null,
            image: {}
        },
        {
            id: 1,
            address: '123 Main Street',
            amount: 1000,
            payment: true,
            date: "03/01/21",
            transactionType: 'Rent Payment',
            paymentType: 'Auto Payment Collection',
            notes: null,
            image: {}
        },
        {
            id: 2,
            address: '1012 Horizon Ridge',
            amount: 250,
            payment: false,
            date: "02/28/21",
            transactionType: 'Repairs',
            paymentType: 'Check',
            notes: null,
            image: {}
        },
        {
            id: 3,
            address: '595 S. Green Valley Pkwy Apt 121',
            amount: 2500,
            payment: true,
            date: "02/28/21",
            transactionType: 'Rent Payment',
            paymentType: 'Auto Payment Collection',
            notes: null,
            image: {}
        },
        {
            id: 4,
            address: '101 Univeristy Dr. Unit 100',
            amount: 500,
            payment: false,
            date: "02/28/21",
            transactionType: 'Repairs',
            paymentType: 'Credit Card',
            notes: 'Hello World',
            image: {}
        },
    ];

    // Amount Function
    function Expense(props) {
        return (
            <Text style={{color: '#D9534F', fontWeight: '700', fontSize: 18}}>-$</Text>
        );
    }
    function Payment(props)  {
        return (
            <Text style={{color: '#5CB85C', fontWeight: '700', fontSize: 18}}>+$</Text>
        );
    }
    function Amount(props) {
        const payment = props.payment;
        if (payment) {
            return <Payment />
        } else {
            return <Expense />
        }

    }

    // Separator
    const renderSeparator = () => {
        return (
          <View
            style={{
              height: .5,
            //   width: '86%',
              backgroundColor: '#CED0CE50',
              marginLeft: '5%',
              marginRight: '5%'
            }}
          />
        );
    }

    // Delete Alert Pop Up
    const deleteAlert = () => {
        Alert.alert(
            "Delete Transaction?",
            "Deleting this transaction will also delete its data from all reportings.",
            [
                {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Delete", style: "destructive", onPress: () => console.log("OK Pressed") }
            ]
        );
    }
    
    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    placement={'left'}
                    centerComponent={{ 
                        text: 'Transactions', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30
                        }
                    }}
                    rightComponent={
                        <>
                            <Icon
                                name='plus'
                                type='feather'
                                color='#fff'
                                size={25}
                                iconStyle={{
                                    paddingTop: 30,
                                    paddingRight: 20,
                                    paddingBottom: 10
                                }}
                                onPress={() => navigation.navigate('AddTransactions')}
                            />
                        </>
                    }
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Feather name='search' color='#fff' size={20} style={styles.searchIcon} />
                    <TextInput 
                        type='search'
                        placeholder='Search Transactions'
                        placeholderTextColor='#ffffff75'
                        style={styles.searchInput}
                        keyboardAppearance='dark'
                    />
                </View>

                {/* Transactions Flat List */}
                <SafeAreaView>
                    <View style={styles.listView}>
                        <FlatList
                            data={data}
                            keyExtractor={item => item.address}
                            renderItem={({ item }) => (
                                <View style={styles.listCell}>
                                    <Text style={styles.transactionType}>{item.transactionType}</Text>
                                    {/* Address */}
                                    <View style={{flexDirection: 'row', marginTop: 10}}>
                                        <Feather name='map-pin' color='#fff' size={15} />
                                        <Text style={styles.listItem}>{item.address}</Text>
                                    </View>
                                    {/* Date and Transaction Amount */}
                                    <View style={styles.itemCenter}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Feather name='clock' color='#fff' size={15} />
                                            <Text style={styles.listItem}>{item.date}</Text>
                                        </View>
                                        <Text 
                                            style={{
                                                color: item.payment === true ? color='#5CB85C' : color='#D9534F', fontWeight: '700', fontSize: 18
                                            }}
                                        ><Amount payment={item.payment} />{item.amount}</Text>
                                    </View>
                                    {/* Payment Type */}
                                    <View style={{flexDirection: 'row', marginTop: 10}}>
                                        <Feather name='credit-card' color='#fff' size={15} />
                                        <Text style={styles.listItem}>{item.paymentType}</Text>
                                    </View>
                                    {/* Actions */}
                                    <View>
                                        <TouchableOpacity style={styles.actionsBtn} onPress={deleteAlert}>
                                            <Feather name='trash-2' color='#fff' size={20} style={{marginRight: 10}} />
                                            <Text style={styles.actionsText}>Delete</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            contentContainerStyle={{ paddingBottom: 350 }}
                            showsVerticalScrollIndicator={false}
                            ItemSeparatorComponent={renderSeparator}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
    
}

export default Transactions;