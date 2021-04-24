import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Forms
import { useForm, Controller } from "react-hook-form";

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './trans-styles';

// Redux Stuff
import { connect } from "react-redux";
import { doAddTransaction } from "../../redux/actions";

const AddTransactions = ({addTransaction}) => {
    
    const navigation = useNavigation();

    const { control, handleSubmit } = useForm();
    const addItem = (data) => {
        addTransaction(data);
        navigation.goBack();
    };

    // For Picker Select
        // Styles
        const pickerStyles = {
            inputIOS: {
                marginHorizontal: 20,
                marginTop: 15,
                borderColor: '#ffffff50',
                borderRadius: 10,
                borderWidth: 1,
                height: 45,
                flexDirection: 'row',
                color: '#fff',
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '500'
            },
            inputAndroid: {
                marginHorizontal: 20,
                marginTop: 15,
                borderColor: '#ffffff50',
                borderRadius: 10,
                borderWidth: 1,
                height: 45,
                flexDirection: 'row',
                color: '#fff',
                paddingLeft: 15,
                fontSize: 16,
                fontWeight: '500'
            }
        }
        // Placeholders
        const TransactionPlaceholder = {
            label: 'Select Transaction Type...',
            value: null,
            color: '#fff'
        }
        const PropertyPlaceholder = {
            label: 'Select Property...',
            value: null,
            color: '#fff'
        }
        const PaymentPlaceholder = {
            label: 'Select Payment Method...',
            value: null,
            color: '#fff'
        }
        const CategoryPlaceholder = {
            label: 'Select Category...',
            value: null,
            color: '#fff'
        }

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
                    rightComponent={
                        <TouchableOpacity style={{paddingTop: 32.5, paddingRight: 10}} onPress={handleSubmit(addItem)}>
                            <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>Save</Text>
                        </TouchableOpacity>
                    }
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                {/* Content */}
                <KeyboardAwareScrollView>
                    {/* Transaction Type */}
                    <Text style={styles.sectionText}>Transaction Type</Text>
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <RNPickerSelect
                                placeholder={TransactionPlaceholder}
                                style={pickerStyles}
                                onValueChange={value => onChange(value)}
                                items={[
                                    { label: 'Expense', value: 'Expense', color: 'white' },
                                    { label: 'Payment', value: 'Payment', color: 'white' },
                                ]}
                            />
                        )}
                        name="transactionType"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Category */}
                    <Text style={styles.sectionText}>Category</Text>
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <RNPickerSelect
                                placeholder={CategoryPlaceholder}
                                style={pickerStyles}
                                onValueChange={value => onChange(value)}
                                items={[
                                    { label: 'Appraisal', value: 'Appraisal', color: 'white' },
                                    { label: 'Cleaning', value: 'cleaning', color: 'white' },
                                    { label: 'Inspection', value: 'Inspection', color: 'white' },
                                    { label: 'Marketing', value: 'Marketing', color: 'white' },
                                    { label: 'Renovations', value: 'Renovations', color: 'white' },
                                    { label: 'Rent Payment', value: 'Rent Payment', color: 'white' },
                                    { label: 'Repairs', value: 'Repairs', color: 'white' },
                                    { label: 'Security Deposit', value: 'Secuirty Deposit', color: 'white' },
                                    { label: 'Tax Services', value: 'Tax Services', color: 'white' },
                                ]}
                            />
                        )}
                        name="transactionCategory"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Property */}
                    <Text style={styles.sectionText}>Property</Text>
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <RNPickerSelect
                                placeholder={PropertyPlaceholder}
                                style={pickerStyles}
                                onValueChange={value => onChange(value)}
                                items={[
                                    { label: 'Property', value: 'property', color: 'white' },
                                    
                                ]}
                            />
                        )}
                        name="address"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Amount */}
                    <Text style={styles.sectionText}>Amount</Text>
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <View style={styles.dateContainer}>
                                <TextInput 
                                    type='text'
                                    placeholder='i.e 1500'
                                    placeholderTextColor='#ffffff80'
                                    style={styles.dateText}
                                    keyboardAppearance='dark'
                                    keyboardType='phone-pad'
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="amount"
                        rules={{ required: true }}
                        defaultValue=""
                    />

                    {/* Date Paid */}
                    <Text style={styles.sectionText}>Date Paid</Text>
                    <Controller
                        control={control}
                        render={({ onChange, value }) => (
                            <View style={styles.dateContainer}>
                                <TextInput 
                                    type='text'
                                    placeholder='MM/DD/YYYY'
                                    placeholderTextColor='#ffffff80'
                                    style={styles.dateText}
                                    keyboardAppearance='dark'
                                    keyboardType='default'
                                    onChangeText={value => onChange(value)}
                                    value={value}
                                />
                            </View>
                        )}
                        name="date"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                    

                    {/* Payment Method */}
                    <View style={{paddingBottom: 20}}>
                        <Text style={styles.sectionText}>Payment Method</Text>
                        <Controller
                            control={control}
                            render={({ onChange, value }) => (
                                <RNPickerSelect
                                    placeholder={PaymentPlaceholder}
                                    style={pickerStyles}
                                    onValueChange={value => onChange(value)}
                                    items={[
                                        { label: 'Bank Transfer', value: 'Bank Transfer', color: 'white' },
                                        { label: 'Cash', value: 'Cash', color: 'white' },
                                        { label: 'Check', value: 'Check', color: 'white' },
                                        { label: 'Other', value: 'Other', color: 'white' },
                                    ]}
                                />
                            )}
                            name="paymentMethod"
                            rules={{ required: true }}
                            defaultValue=""
                        />
                    </View>

                    {/* Attachement */}
                    {/* <Text style={styles.sectionText}>Attachements:</Text>
                    <TouchableOpacity style={styles.upload}>
                        <Feather name='upload' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                        <Text style={{color: '#fff', marginLeft: 10, fontSize: 16, fontWeight: '600', alignSelf: 'center'}}>Upload Attachement</Text>
                    </TouchableOpacity> */}

                    {/* Notes */}
                    {/* <Text style={styles.sectionText}>Notes:</Text>
                    <View>
                        <TextInput 
                            style={{
                                marginTop: 10,
                                marginLeft: 30,
                                marginBottom: 50,
                                color:'#fff',
                                fontSize: 16,
                                fontWeight: '600'
                            }}
                            placeholder="Enter Notes (optional)..."
                            placeholderTextColor='#ffffff90'
                            keyboardAppearance='dark'
                            autoCapitalize='none'
                            autoCorrect={false}
                            multiline={true}
                        />
                    </View> */}
                </KeyboardAwareScrollView>
            </View>
        </>
    );
};

const actions = {
    addTransaction: doAddTransaction,
};

export default connect(null, actions)(AddTransactions);