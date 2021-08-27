import React from 'react';
import { Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import { Header, Icon } from 'react-native-elements';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './styles';

const About = ({ navigation }) => {

    return(
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header
                    centerComponent={{
                        text: "About",
                        style: {
                            color: "#34383D",
                            fontWeight: '600', 
                            fontSize: 20, 
                            paddingTop: 20,
                        },
                    }}
                    leftComponent={
                        <Icon
                            name="arrow-left"
                            type="feather"
                            color="#34383D80"
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
                        backgroundColor: "#fff",
                        justifyContent: "space-around",
                        borderBottomWidth: 0,
                    }}
                />

                {/* Current Version */}
                <View style={{margin: 20, flexDirection: "row"}}>
                    <Text style={{color: '#34383D80', marginRight: 10, fontSize: 16, fontWeight: '700'}}>Current Version:</Text>
                    <Text style={{color: '#34383D', fontSize: 16, fontWeight: '700'}}>1.0.0 Beta</Text>
                </View>

                {/* Privacy Policy */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('PrivacyPolicy')}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='lock' color='#34383D80' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                        <Text style={styles.buttonText}>Privacy Policy</Text>
                    </View>
                    <Feather name='arrow-right' color='#34383D80' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                </TouchableOpacity>

                {/* Privacy Policy */}
                <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Terms')}>
                    <View style={{flexDirection: 'row'}}>
                        <Feather name='archive' color='#34383D80' size={20} style={{alignSelf: 'center', marginLeft: 15}} />
                        <Text style={styles.buttonText}>Terms & Conditions</Text>
                    </View>
                    <Feather name='arrow-right' color='#34383D80' size={20} style={{alignSelf: 'center', marginRight: 10}} />
                </TouchableOpacity>
            </View>
        </>
    );
}

export default About;