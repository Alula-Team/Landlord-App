import React, { useState } from 'react';
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
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
            notes: null,
            image: ''
        },
        {
            id: 1,
            address: '123 Main Street',
            amount: 1000,
            payment: true,
            date: "03/01/21",
            transactionType: 'Rent Payment',
            notes: null,
            image: ''
        },
        {
            id: 2,
            address: '1012 Horizon Ridge',
            amount: 250,
            payment: false,
            date: "02/28/21",
            transactionType: 'Repairs',
            notes: null,
            image: ''
        },
        {
            id: 3,
            address: '595 S. Green Valley Pkwy Apt 121',
            amount: 2500,
            payment: true,
            date: "02/28/21",
            transactionType: 'Rent Payment',
            notes: null,
            image: ''
        },
        {
            id: 4,
            address: '101 Univeristy Dr. Unit 100',
            amount: 500,
            payment: false,
            date: "02/28/21",
            transactionType: 'Repairs',
            notes: null,
            image: ''
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
                                <TouchableOpacity style={styles.listCell} onPress={() => navigation.navigate('TransactionDetail')}>
                                    <Text style={styles.transactionType}>{item.transactionType}</Text>
                                    {/* Address and Transaction Amount */}
                                    <View style={styles.itemCenter}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Feather name='map-pin' color='#fff' size={15} />
                                            <Text style={styles.listItem}>{item.address}</Text>
                                        </View>
                                        <Text 
                                            style={{
                                                color: item.payment === true ? color='#5CB85C' : color='#D9534F', fontWeight: '700', fontSize: 18
                                            }}
                                        ><Amount payment={item.payment} />{item.amount}</Text>
                                    </View>
                                    {/* Date */}
                                    <View style={{flexDirection: 'row', marginTop: 10}}>
                                        <Feather name='clock' color='#fff' size={15} />
                                        <Text style={styles.listItem}>{item.date}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            contentContainerStyle={{ paddingBottom: 350 }}
                            showsVerticalScrollIndicator={false}
                            // ItemSeparatorComponent={renderSeparator}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
    
}

export default Transactions;