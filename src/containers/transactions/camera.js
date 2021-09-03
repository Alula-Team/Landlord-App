import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

// Vector Icons
import Feather from "react-native-vector-icons/Feather";

const CameraUpload = ({navigation}) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [modalVisible, setModalVisible] = useState(false);

    // Camera
    useEffect(() => {
        (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    return (
        <View style={styles.cameraContainer}>
            <Camera style={styles.camera} type={type}>
                <View style={styles.cameraGroup}>
                    {/* Back Button */}
                    <TouchableOpacity style={styles.backButton} onPress={() => setModalVisible(!modalVisible)}>
                        {/* <Feather name='arrow-left' size={25} color='#fff' /> */}
                        <Text style={styles.cancel}>Cancel</Text>
                    </TouchableOpacity>
                    
                    {/* Flip Camera */}
                    <TouchableOpacity
                        style={styles.flipButton}
                        onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                            ? Camera.Constants.Type.front
                            : Camera.Constants.Type.back
                        );
                        }}>
                        <Feather name='repeat' size={20} color='#fff' />
                    </TouchableOpacity>

                    {/* Capture Image Button */}
                    <TouchableOpacity 
                        style={{alignSelf: 'center'}} 
                        onPress={async() => {
                            if(cameraRef){
                            let photo = await cameraRef.takePictureAsync();
                            console.log('photo', photo);
                            }
                        }}
                    >
                        <View style={styles.captureOuter}>
                            <View style={styles.captureInner} >
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    cameraContainer: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },
    camera: {
        flex: 1
    },
    cameraGroup: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'flex-end'
    },
    backButton: {
        flex: 0.1,
        marginLeft: 30,
        top: 60,
        position: 'absolute',
    },
    cancel: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff'
    },
    flipButton: {
        flex: 0.1,
        marginLeft: 30,
        alignSelf: 'flex-start',
        justifyContent: 'flex-end',
    },
    captureOuter: { 
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white',
        height: 50,
        width: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    captureInner: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: 'white',
        height: 40,
        width: 40,
        backgroundColor: 'white',
    }
}); 

export default CameraUpload;
