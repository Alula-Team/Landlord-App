import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

// Icons
import Icon from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import styles from './auth-styles';

const OnboardingScreen = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header
                backgroundColor={'transparent'}
                barStyle={'light-content'}
                containerStyle={{ borderBottomWidth: 0}}
                centerComponent={
                    <Text style={styles.headerText}> ALULA </Text>
                }
                leftComponent={
                    <Feather 
                        name={'arrow-left'}
                        size={25}
                        style={{
                            color: 'white',
                            marginTop: 20,
                            marginLeft: 20
                        }}
                        onPress={() => navigation.goBack()}
                    />
                }
                rightComponent={
                    <TouchableOpacity style={{ paddingTop: 20, paddingRight: 20 }}>
                      <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Skip</Text>
                    </TouchableOpacity>
                }
            />

            <Text style={{color: '#fff', marginLeft: 30, marginTop: 40, fontSize: 18}}>Let's do a little onboarding...</Text>

            <View style={{marginTop: 50}}>
                {/* Enable Notifications Button */}
                <TouchableOpacity style={styles.buttonContainer}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='bell' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                        <Text style={styles.buttonText}>Enable Notifications</Text>
                    </View>
                </TouchableOpacity>

                {/* Enable Auto Payment Collection */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('UpdatePayment')}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='credit-card' color='#fff' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                        <Text style={styles.buttonText}>Update Payment Info</Text>
                    </View>
                    <Feather name='arrow-right' color='#fff' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.continueButton}>
                <Text style={styles.submitText}>Finished</Text>
            </TouchableOpacity>
        </View>
    );

}

export default OnboardingScreen;