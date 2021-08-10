import React from "react";
import { View, Image } from "react-native";

// Style Sheet
import styles from "./styles";

const Loading = ({ navigation }) => {

    setTimeout(function(){
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        navigation.navigate('Login')
    }, 5500);

    return(
        <View style={styles.splashContainer}>
            <Image source={require('../../assets/splash.png')} style={{width: '100%', height: '100%', alignSelf: 'center'}} />
        </View>
    );
}

export default Loading;
