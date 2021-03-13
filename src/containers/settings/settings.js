import React from 'react'
import { Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { Badge, Header, Icon } from 'react-native-elements';

// Navigation
import { useNavigation } from '@react-navigation/native';

// Vector Icons
import Feather from 'react-native-vector-icons/Feather';

// Style Sheet
import styles from './sett-styles';
import { ScrollView } from 'react-native';

const Settings = () => {
    return (
        <>
            <View style={styles.container}>
                {/* Header */}
                <Header 
                    placement={'left'}
                    centerComponent={{ 
                        text: 'Settings', 
                        style: { 
                            color: '#fff', 
                            fontWeight: 'bold', 
                            fontSize: 25, 
                            paddingTop: 30
                        }
                    }}
                    containerStyle={{
                        backgroundColor: '#09061C',
                        justifyContent: 'space-around',
                        borderBottomWidth: 0
                    }}
                />

                <ScrollView>
                    
                </ScrollView>
            </View>
        </>
    );
}

export default Settings;
