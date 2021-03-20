import React from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import styles from './tenant-styles';

const AddTransactions = () => {
    
    const navigation = useNavigation();

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
                fontWeight: '600'
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
                fontWeight: '600'
            }
        }
        // Placeholders
        const PropertyPlaceholder = {
            label: 'Select Property...',
            value: null,
            color: '#fff'
        }

    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    centerComponent={{ 
                        text: 'Add Tenant', 
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
            
                <KeyboardAwareScrollView style={{marginHorizontal: 10}}>
                    {/* Form */}
                    <Text style={styles.sectionText}>Tenant Information</Text>

                    {/* Tenant Name */}
                    <View style={styles.searchContainer}>
                        <TextInput 
                            type='text'
                            placeholder=' Name...'
                            placeholderTextColor='#ffffff80'
                            style={styles.tenantInput}
                            keyboardAppearance='dark'
                        />
                    </View>
                    
                    {/* Email Address */}
                    <View style={styles.searchContainer}>
                        <TextInput 
                            type='text'
                            placeholder='Email...'
                            placeholderTextColor='#ffffff80'
                            style={styles.tenantInput}
                            keyboardAppearance='dark'
                            keyboardType='email-address'
                        />
                    </View>

                    {/* Phone Number*/}
                    <View style={styles.searchContainer}>
                        <TextInput 
                            type='text'
                            placeholder='Phone Number...'
                            placeholderTextColor='#ffffff80'
                            style={styles.tenantInput}
                            keyboardAppearance='dark'
                            keyboardType='phone-pad'
                        />
                    </View>

                    {/* Property */}
                    <Text style={styles.sectionText}>Property</Text>
                    <RNPickerSelect
                        placeholder={PropertyPlaceholder}
                        style={pickerStyles}
                        onValueChange={(value) => console.log(value)}
                        items={[
                            { label: 'Property', value: 'property', color: 'white' },
                            
                        ]}
                    />
                    
                </KeyboardAwareScrollView>
            </View>
        </>
    );
}

export default AddTransactions;