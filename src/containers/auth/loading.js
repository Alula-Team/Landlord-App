import React from 'react';
import { View, Image, Text } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import styles from './auth-styles';

const Loading = () => {

    const navigation = useNavigation();

    setTimeout(function(){
 
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        navigation.navigate('Login')
   
    }, 3000);

    return(
        <View style={styles.splashContainer}>
            <Image source={require('../../assets/favicon.jpg')} style={styles.splashImg} />
        </View>
    );
}

export default Loading;