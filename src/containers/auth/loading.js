import React, { useState, useEffect } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Style Sheet
import styles from './auth-styles';

const Loading = () => {

    const navigation = useNavigation();

    const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
    const spin = spinAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    useEffect(() => {
        Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 3000,
                easing: Easing.linear,
                useNativeDriver: true
            }),
        ).start();
    });

    setTimeout(function(){
 
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        navigation.navigate('Login')
   
    }, 3000);

    return(
        <View style={styles.splashContainer}>
            <Animated.Image source={require('../../assets/favicon.jpg')} style={{width: 200, height: 200, alignSelf: 'center', transform: [{rotate: spin}]}} />
            <Text style={{color: '#fff', fontSize: 18, fontWeight: '700', textAlign: 'center'}}>Loading ...</Text>
        </View>
    );
}

export default Loading;